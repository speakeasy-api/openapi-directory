import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationConfigurations = "StarlingDoveService.DescribeRemediationConfigurations"
}
export declare class DescribeRemediationConfigurationsRequest extends SpeakeasyBase {
    describeRemediationConfigurationsRequest: shared.DescribeRemediationConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRemediationConfigurationsXAmzTargetEnum;
}
export declare class DescribeRemediationConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRemediationConfigurationsResponse?: shared.DescribeRemediationConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
