import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrialComponentXAmzTargetEnum {
    SageMakerDescribeTrialComponent = "SageMaker.DescribeTrialComponent"
}
export declare class DescribeTrialComponentRequest extends SpeakeasyBase {
    describeTrialComponentRequest: shared.DescribeTrialComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrialComponentXAmzTargetEnum;
}
export declare class DescribeTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrialComponentResponse?: shared.DescribeTrialComponentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
