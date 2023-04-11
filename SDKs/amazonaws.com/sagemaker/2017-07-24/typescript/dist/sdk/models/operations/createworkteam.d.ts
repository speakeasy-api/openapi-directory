import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkteamXAmzTargetEnum {
    SageMakerCreateWorkteam = "SageMaker.CreateWorkteam"
}
export declare class CreateWorkteamRequest extends SpeakeasyBase {
    createWorkteamRequest: shared.CreateWorkteamRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkteamXAmzTargetEnum;
}
export declare class CreateWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorkteamResponse?: shared.CreateWorkteamResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
