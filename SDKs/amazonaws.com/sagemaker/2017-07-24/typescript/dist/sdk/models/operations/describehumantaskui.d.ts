import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHumanTaskUiXAmzTargetEnum {
    SageMakerDescribeHumanTaskUi = "SageMaker.DescribeHumanTaskUi"
}
export declare class DescribeHumanTaskUiRequest extends SpeakeasyBase {
    describeHumanTaskUiRequest: shared.DescribeHumanTaskUiRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHumanTaskUiXAmzTargetEnum;
}
export declare class DescribeHumanTaskUiResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeHumanTaskUiResponse?: shared.DescribeHumanTaskUiResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
