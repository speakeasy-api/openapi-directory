import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAgentVersionsXAmzTargetEnum {
    OpsWorks20130218DescribeAgentVersions = "OpsWorks_20130218.DescribeAgentVersions"
}
export declare class DescribeAgentVersionsRequest extends SpeakeasyBase {
    describeAgentVersionsRequest: shared.DescribeAgentVersionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAgentVersionsXAmzTargetEnum;
}
export declare class DescribeAgentVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAgentVersionsResult?: shared.DescribeAgentVersionsResult;
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
