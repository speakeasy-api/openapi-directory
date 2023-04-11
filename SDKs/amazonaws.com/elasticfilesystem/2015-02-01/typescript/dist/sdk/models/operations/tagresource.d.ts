import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagResourceRequestBody extends SpeakeasyBase {
    /**
     * An array of <code>Tag</code> objects to add. Each <code>Tag</code> object is a key-value pair.
     */
    tags: shared.Tag[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    requestBody: TagResourceRequestBody;
    /**
     * The ID specifying the EFS resource that you want to create a tag for.
     */
    resourceId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    /**
     * AccessPointNotFound
     */
    accessPointNotFound?: any;
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
