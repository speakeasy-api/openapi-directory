import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHubXAmzTargetEnum {
    SageMakerDescribeHub = "SageMaker.DescribeHub"
}
export declare class DescribeHubRequest extends SpeakeasyBase {
    describeHubRequest: shared.DescribeHubRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHubXAmzTargetEnum;
}
export declare class DescribeHubResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeHubResponse?: shared.DescribeHubResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
