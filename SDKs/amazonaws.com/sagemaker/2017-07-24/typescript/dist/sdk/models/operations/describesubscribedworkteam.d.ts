import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSubscribedWorkteamXAmzTargetEnum {
    SageMakerDescribeSubscribedWorkteam = "SageMaker.DescribeSubscribedWorkteam"
}
export declare class DescribeSubscribedWorkteamRequest extends SpeakeasyBase {
    describeSubscribedWorkteamRequest: shared.DescribeSubscribedWorkteamRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscribedWorkteamXAmzTargetEnum;
}
export declare class DescribeSubscribedWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSubscribedWorkteamResponse?: shared.DescribeSubscribedWorkteamResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
