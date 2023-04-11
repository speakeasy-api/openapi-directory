import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRaidArraysXAmzTargetEnum {
    OpsWorks20130218DescribeRaidArrays = "OpsWorks_20130218.DescribeRaidArrays"
}
export declare class DescribeRaidArraysRequest extends SpeakeasyBase {
    describeRaidArraysRequest: shared.DescribeRaidArraysRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRaidArraysXAmzTargetEnum;
}
export declare class DescribeRaidArraysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRaidArraysResult?: shared.DescribeRaidArraysResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
