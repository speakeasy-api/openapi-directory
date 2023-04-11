import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkteamXAmzTargetEnum {
    SageMakerDeleteWorkteam = "SageMaker.DeleteWorkteam"
}
export declare class DeleteWorkteamRequest extends SpeakeasyBase {
    deleteWorkteamRequest: shared.DeleteWorkteamRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkteamXAmzTargetEnum;
}
export declare class DeleteWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteWorkteamResponse?: shared.DeleteWorkteamResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
