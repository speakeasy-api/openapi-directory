import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLaunchConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Request to get Launch Configuration information by Source Server ID.
     */
    sourceServerID: string;
}
export declare class GetLaunchConfigurationRequest extends SpeakeasyBase {
    requestBody: GetLaunchConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    launchConfiguration?: shared.LaunchConfiguration;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
