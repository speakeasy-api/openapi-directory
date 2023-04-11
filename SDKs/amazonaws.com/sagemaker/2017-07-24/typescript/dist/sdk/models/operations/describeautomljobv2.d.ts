import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAutoMLJobV2XAmzTargetEnum {
    SageMakerDescribeAutoMLJobV2 = "SageMaker.DescribeAutoMLJobV2"
}
export declare class DescribeAutoMLJobV2Request extends SpeakeasyBase {
    describeAutoMLJobV2Request: shared.DescribeAutoMLJobV2Request;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutoMLJobV2XAmzTargetEnum;
}
export declare class DescribeAutoMLJobV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAutoMLJobV2Response?: shared.DescribeAutoMLJobV2Response;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
