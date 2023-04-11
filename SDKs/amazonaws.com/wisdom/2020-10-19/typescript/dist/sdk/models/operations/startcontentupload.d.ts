import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartContentUploadRequestBody extends SpeakeasyBase {
    /**
     * The type of content to upload.
     */
    contentType: string;
}
export declare class StartContentUploadRequest extends SpeakeasyBase {
    requestBody: StartContentUploadRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: string;
}
export declare class StartContentUploadResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startContentUploadResponse?: shared.StartContentUploadResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
