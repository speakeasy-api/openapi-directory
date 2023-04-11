import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConfigurationRecordersXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationRecorders = "StarlingDoveService.DescribeConfigurationRecorders"
}
export declare class DescribeConfigurationRecordersRequest extends SpeakeasyBase {
    describeConfigurationRecordersRequest: shared.DescribeConfigurationRecordersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationRecordersXAmzTargetEnum;
}
export declare class DescribeConfigurationRecordersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConfigurationRecordersResponse?: shared.DescribeConfigurationRecordersResponse;
    /**
     * NoSuchConfigurationRecorderException
     */
    noSuchConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
