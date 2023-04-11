import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEmailMonitoringConfigurationXAmzTargetEnum {
    WorkMailServiceDescribeEmailMonitoringConfiguration = "WorkMailService.DescribeEmailMonitoringConfiguration"
}
export declare class DescribeEmailMonitoringConfigurationRequest extends SpeakeasyBase {
    describeEmailMonitoringConfigurationRequest: shared.DescribeEmailMonitoringConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEmailMonitoringConfigurationXAmzTargetEnum;
}
export declare class DescribeEmailMonitoringConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEmailMonitoringConfigurationResponse?: shared.DescribeEmailMonitoringConfigurationResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
