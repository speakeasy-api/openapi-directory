import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartAssessmentFrameworkShareRequestBody extends SpeakeasyBase {
    /**
     *  An optional comment from the sender about the share request.
     */
    comment?: string;
    /**
     *  The Amazon Web Services account of the recipient.
     */
    destinationAccount: string;
    /**
     *  The Amazon Web Services Region of the recipient.
     */
    destinationRegion: string;
}
export declare class StartAssessmentFrameworkShareRequest extends SpeakeasyBase {
    requestBody: StartAssessmentFrameworkShareRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique identifier for the custom framework to be shared.
     */
    frameworkId: string;
}
export declare class StartAssessmentFrameworkShareResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startAssessmentFrameworkShareResponse?: shared.StartAssessmentFrameworkShareResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
