import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAutoMLJobXAmzTargetEnum {
    SageMakerDescribeAutoMLJob = "SageMaker.DescribeAutoMLJob"
}
export declare class DescribeAutoMLJobRequest extends SpeakeasyBase {
    describeAutoMLJobRequest: shared.DescribeAutoMLJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutoMLJobXAmzTargetEnum;
}
export declare class DescribeAutoMLJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAutoMLJobResponse?: shared.DescribeAutoMLJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
