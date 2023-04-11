import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStackProvisioningParametersXAmzTargetEnum {
    OpsWorks20130218DescribeStackProvisioningParameters = "OpsWorks_20130218.DescribeStackProvisioningParameters"
}
export declare class DescribeStackProvisioningParametersRequest extends SpeakeasyBase {
    describeStackProvisioningParametersRequest: shared.DescribeStackProvisioningParametersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStackProvisioningParametersXAmzTargetEnum;
}
export declare class DescribeStackProvisioningParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStackProvisioningParametersResult?: shared.DescribeStackProvisioningParametersResult;
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
