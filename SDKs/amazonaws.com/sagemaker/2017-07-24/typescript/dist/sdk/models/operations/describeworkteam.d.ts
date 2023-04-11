import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkteamXAmzTargetEnum {
    SageMakerDescribeWorkteam = "SageMaker.DescribeWorkteam"
}
export declare class DescribeWorkteamRequest extends SpeakeasyBase {
    describeWorkteamRequest: shared.DescribeWorkteamRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkteamXAmzTargetEnum;
}
export declare class DescribeWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkteamResponse?: shared.DescribeWorkteamResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
