import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDeploymentsXAmzTargetEnum {
    OpsWorks20130218DescribeDeployments = "OpsWorks_20130218.DescribeDeployments"
}
export declare class DescribeDeploymentsRequest extends SpeakeasyBase {
    describeDeploymentsRequest: shared.DescribeDeploymentsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeploymentsXAmzTargetEnum;
}
export declare class DescribeDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeploymentsResult?: shared.DescribeDeploymentsResult;
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
