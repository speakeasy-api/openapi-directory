import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTimeToLiveXAmzTargetEnum {
    DynamoDB20120810DescribeTimeToLive = "DynamoDB_20120810.DescribeTimeToLive"
}
export declare class DescribeTimeToLiveRequest extends SpeakeasyBase {
    describeTimeToLiveInput: shared.DescribeTimeToLiveInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTimeToLiveXAmzTargetEnum;
}
export declare class DescribeTimeToLiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTimeToLiveOutput?: shared.DescribeTimeToLiveOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
