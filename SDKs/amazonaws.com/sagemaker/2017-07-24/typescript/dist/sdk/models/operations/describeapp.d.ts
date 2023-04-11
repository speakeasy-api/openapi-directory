import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAppXAmzTargetEnum {
    SageMakerDescribeApp = "SageMaker.DescribeApp"
}
export declare class DescribeAppRequest extends SpeakeasyBase {
    describeAppRequest: shared.DescribeAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppXAmzTargetEnum;
}
export declare class DescribeAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAppResponse?: shared.DescribeAppResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
