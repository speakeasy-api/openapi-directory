import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWorkteamXAmzTargetEnum {
    SageMakerUpdateWorkteam = "SageMaker.UpdateWorkteam"
}
export declare class UpdateWorkteamRequest extends SpeakeasyBase {
    updateWorkteamRequest: shared.UpdateWorkteamRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkteamXAmzTargetEnum;
}
export declare class UpdateWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * Success
     */
    updateWorkteamResponse?: shared.UpdateWorkteamResponse;
}
