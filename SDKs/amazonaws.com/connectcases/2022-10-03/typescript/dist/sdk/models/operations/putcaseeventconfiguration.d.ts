import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration to enable EventBridge case event delivery and determine what data is delivered.
 */
export declare class PutCaseEventConfigurationRequestBodyEventBridge extends SpeakeasyBase {
    enabled?: boolean;
    includedData?: shared.EventIncludedData;
}
export declare class PutCaseEventConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Configuration to enable EventBridge case event delivery and determine what data is delivered.
     */
    eventBridge: PutCaseEventConfigurationRequestBodyEventBridge;
}
export declare class PutCaseEventConfigurationRequest extends SpeakeasyBase {
    requestBody: PutCaseEventConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
}
export declare class PutCaseEventConfigurationResponse extends SpeakeasyBase {
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
     * Success
     */
    putCaseEventConfigurationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
