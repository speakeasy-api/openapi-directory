import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConfigurationRecorderStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorderStatus = "StarlingDoveService.DescribeConfigurationRecorderStatus"
}
export declare class DescribeConfigurationRecorderStatusRequest extends SpeakeasyBase {
    describeConfigurationRecorderStatusRequest: shared.DescribeConfigurationRecorderStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationRecorderStatusXAmzTargetEnum;
}
export declare class DescribeConfigurationRecorderStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConfigurationRecorderStatusResponse?: shared.DescribeConfigurationRecorderStatusResponse;
    /**
     * NoSuchConfigurationRecorderException
     */
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
