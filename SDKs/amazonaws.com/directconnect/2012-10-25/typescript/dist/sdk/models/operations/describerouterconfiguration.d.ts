import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRouterConfigurationXAmzTargetEnum {
    OvertureServiceDescribeRouterConfiguration = "OvertureService.DescribeRouterConfiguration"
}
export declare class DescribeRouterConfigurationRequest extends SpeakeasyBase {
    describeRouterConfigurationRequest: shared.DescribeRouterConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRouterConfigurationXAmzTargetEnum;
}
export declare class DescribeRouterConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRouterConfigurationResponse?: shared.DescribeRouterConfigurationResponse;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
