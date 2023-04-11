import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTagsRequestBody extends SpeakeasyBase {
    /**
     * An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.
     */
    tags: shared.Tag[];
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    /**
     * The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.
     */
    fileSystemId: string;
    requestBody: CreateTagsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTagsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
