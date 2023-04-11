import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623DeleteRemoteAccessSession = "DeviceFarm_20150623.DeleteRemoteAccessSession"
}
export declare class DeleteRemoteAccessSessionRequest extends SpeakeasyBase {
    deleteRemoteAccessSessionRequest: shared.DeleteRemoteAccessSessionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRemoteAccessSessionXAmzTargetEnum;
}
export declare class DeleteRemoteAccessSessionResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteRemoteAccessSessionResult?: Record<string, any>;
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
