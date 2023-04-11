import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.
 */
export declare class UpdateServiceIntegrationRequestBodyServiceIntegration extends SpeakeasyBase {
    logsAnomalyDetection?: shared.LogsAnomalyDetectionIntegrationConfig;
    /**
     *  Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.
     */
    opsCenter?: shared.OpsCenterIntegrationConfig;
}
export declare class UpdateServiceIntegrationRequestBody extends SpeakeasyBase {
    /**
     *  Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.
     */
    serviceIntegration: UpdateServiceIntegrationRequestBodyServiceIntegration;
}
export declare class UpdateServiceIntegrationRequest extends SpeakeasyBase {
    requestBody: UpdateServiceIntegrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateServiceIntegrationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * Success
     */
    updateServiceIntegrationResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
