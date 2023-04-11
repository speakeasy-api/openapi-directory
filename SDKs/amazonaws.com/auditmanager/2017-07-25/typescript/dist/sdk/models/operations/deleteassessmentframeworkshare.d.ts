import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specifies whether the share request is a sent request or a received request.
 */
export declare enum DeleteAssessmentFrameworkShareRequestTypeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}
export declare class DeleteAssessmentFrameworkShareRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the share request to be deleted.
     */
    requestId: string;
    /**
     * Specifies whether the share request is a sent request or a received request.
     */
    requestType: DeleteAssessmentFrameworkShareRequestTypeEnum;
}
export declare class DeleteAssessmentFrameworkShareResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAssessmentFrameworkShareResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
