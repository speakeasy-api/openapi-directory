import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSpaceXAmzTargetEnum {
    SageMakerDescribeSpace = "SageMaker.DescribeSpace"
}
export declare class DescribeSpaceRequest extends SpeakeasyBase {
    describeSpaceRequest: shared.DescribeSpaceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSpaceXAmzTargetEnum;
}
export declare class DescribeSpaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSpaceResponse?: shared.DescribeSpaceResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
