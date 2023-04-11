import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623CreateRemoteAccessSession = "DeviceFarm_20150623.CreateRemoteAccessSession"
}
export declare class CreateRemoteAccessSessionRequest extends SpeakeasyBase {
    createRemoteAccessSessionRequest: shared.CreateRemoteAccessSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRemoteAccessSessionXAmzTargetEnum;
}
export declare class CreateRemoteAccessSessionResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createRemoteAccessSessionResult?: shared.CreateRemoteAccessSessionResult;
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
