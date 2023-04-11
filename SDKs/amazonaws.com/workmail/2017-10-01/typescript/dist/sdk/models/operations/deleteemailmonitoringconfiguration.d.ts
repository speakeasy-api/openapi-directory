import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEmailMonitoringConfigurationXAmzTargetEnum {
    WorkMailServiceDeleteEmailMonitoringConfiguration = "WorkMailService.DeleteEmailMonitoringConfiguration"
}
export declare class DeleteEmailMonitoringConfigurationRequest extends SpeakeasyBase {
    deleteEmailMonitoringConfigurationRequest: shared.DeleteEmailMonitoringConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEmailMonitoringConfigurationXAmzTargetEnum;
}
export declare class DeleteEmailMonitoringConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEmailMonitoringConfigurationResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
