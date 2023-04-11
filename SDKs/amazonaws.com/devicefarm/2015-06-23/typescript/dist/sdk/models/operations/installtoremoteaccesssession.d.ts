import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InstallToRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623InstallToRemoteAccessSession = "DeviceFarm_20150623.InstallToRemoteAccessSession"
}
export declare class InstallToRemoteAccessSessionRequest extends SpeakeasyBase {
    installToRemoteAccessSessionRequest: shared.InstallToRemoteAccessSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InstallToRemoteAccessSessionXAmzTargetEnum;
}
export declare class InstallToRemoteAccessSessionResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    installToRemoteAccessSessionResult?: shared.InstallToRemoteAccessSessionResult;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
