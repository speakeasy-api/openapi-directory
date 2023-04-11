import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTagsRequestBody extends SpeakeasyBase {
    /**
     * A list of tag keys to delete.
     */
    tagKeys: string[];
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    /**
     * The ID of the file system whose tags you want to delete (String).
     */
    fileSystemId: string;
    requestBody: DeleteTagsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
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
