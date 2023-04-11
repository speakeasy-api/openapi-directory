import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623StopRemoteAccessSession = "DeviceFarm_20150623.StopRemoteAccessSession"
}
export declare class StopRemoteAccessSessionRequest extends SpeakeasyBase {
    stopRemoteAccessSessionRequest: shared.StopRemoteAccessSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRemoteAccessSessionXAmzTargetEnum;
}
export declare class StopRemoteAccessSessionResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    /**
     * Success
     */
    stopRemoteAccessSessionResult?: shared.StopRemoteAccessSessionResult;
}
