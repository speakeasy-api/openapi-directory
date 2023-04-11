import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAttackStatisticsXAmzTargetEnum {
    AWSShield20160616DescribeAttackStatistics = "AWSShield_20160616.DescribeAttackStatistics"
}
export declare class DescribeAttackStatisticsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAttackStatisticsXAmzTargetEnum;
}
export declare class DescribeAttackStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAttackStatisticsResponse?: shared.DescribeAttackStatisticsResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
