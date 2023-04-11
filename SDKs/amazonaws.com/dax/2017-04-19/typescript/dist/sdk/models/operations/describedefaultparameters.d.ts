import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDefaultParametersXAmzTargetEnum {
    AmazonDaxv3DescribeDefaultParameters = "AmazonDAXV3.DescribeDefaultParameters"
}
export declare class DescribeDefaultParametersRequest extends SpeakeasyBase {
    describeDefaultParametersRequest: shared.DescribeDefaultParametersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDefaultParametersXAmzTargetEnum;
}
export declare class DescribeDefaultParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDefaultParametersResponse?: shared.DescribeDefaultParametersResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
