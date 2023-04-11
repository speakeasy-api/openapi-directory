import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623GetRemoteAccessSession = "DeviceFarm_20150623.GetRemoteAccessSession"
}
export declare class GetRemoteAccessSessionRequest extends SpeakeasyBase {
    getRemoteAccessSessionRequest: shared.GetRemoteAccessSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRemoteAccessSessionXAmzTargetEnum;
}
export declare class GetRemoteAccessSessionResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    getRemoteAccessSessionResult?: shared.GetRemoteAccessSessionResult;
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
