import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeModelCardXAmzTargetEnum {
    SageMakerDescribeModelCard = "SageMaker.DescribeModelCard"
}
export declare class DescribeModelCardRequest extends SpeakeasyBase {
    describeModelCardRequest: shared.DescribeModelCardRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelCardXAmzTargetEnum;
}
export declare class DescribeModelCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeModelCardResponse?: shared.DescribeModelCardResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
