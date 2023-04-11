import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRemoteAccessSessionsXAmzTargetEnum {
    DeviceFarm20150623ListRemoteAccessSessions = "DeviceFarm_20150623.ListRemoteAccessSessions"
}
export declare class ListRemoteAccessSessionsRequest extends SpeakeasyBase {
    listRemoteAccessSessionsRequest: shared.ListRemoteAccessSessionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRemoteAccessSessionsXAmzTargetEnum;
}
export declare class ListRemoteAccessSessionsResponse extends SpeakeasyBase {
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
     * Success
     */
    listRemoteAccessSessionsResult?: shared.ListRemoteAccessSessionsResult;
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
