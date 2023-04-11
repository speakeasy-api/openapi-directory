import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrialXAmzTargetEnum {
    SageMakerDescribeTrial = "SageMaker.DescribeTrial"
}
export declare class DescribeTrialRequest extends SpeakeasyBase {
    describeTrialRequest: shared.DescribeTrialRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrialXAmzTargetEnum;
}
export declare class DescribeTrialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrialResponse?: shared.DescribeTrialResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
