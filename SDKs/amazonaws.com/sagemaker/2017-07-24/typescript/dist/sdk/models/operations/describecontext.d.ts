import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeContextXAmzTargetEnum {
    SageMakerDescribeContext = "SageMaker.DescribeContext"
}
export declare class DescribeContextRequest extends SpeakeasyBase {
    describeContextRequest: shared.DescribeContextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContextXAmzTargetEnum;
}
export declare class DescribeContextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeContextResponse?: shared.DescribeContextResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
