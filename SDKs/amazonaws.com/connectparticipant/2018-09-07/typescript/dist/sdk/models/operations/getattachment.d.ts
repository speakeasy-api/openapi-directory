import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAttachmentRequestBody extends SpeakeasyBase {
    /**
     * A unique identifier for the attachment.
     */
    attachmentId: string;
}
export declare class GetAttachmentRequest extends SpeakeasyBase {
    requestBody: GetAttachmentRequestBody;
    xAmzAlgorithm?: string;
    /**
     * The authentication token associated with the participant's connection.
     */
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getAttachmentResponse?: shared.GetAttachmentResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
