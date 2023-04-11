import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutEmailMonitoringConfigurationXAmzTargetEnum {
    WorkMailServicePutEmailMonitoringConfiguration = "WorkMailService.PutEmailMonitoringConfiguration"
}
export declare class PutEmailMonitoringConfigurationRequest extends SpeakeasyBase {
    putEmailMonitoringConfigurationRequest: shared.PutEmailMonitoringConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutEmailMonitoringConfigurationXAmzTargetEnum;
}
export declare class PutEmailMonitoringConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * Success
     */
    putEmailMonitoringConfigurationResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
