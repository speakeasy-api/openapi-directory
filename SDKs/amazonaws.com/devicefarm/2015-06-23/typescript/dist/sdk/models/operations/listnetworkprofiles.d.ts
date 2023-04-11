import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListNetworkProfilesXAmzTargetEnum {
    DeviceFarm20150623ListNetworkProfiles = "DeviceFarm_20150623.ListNetworkProfiles"
}
export declare class ListNetworkProfilesRequest extends SpeakeasyBase {
    listNetworkProfilesRequest: shared.ListNetworkProfilesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListNetworkProfilesXAmzTargetEnum;
}
export declare class ListNetworkProfilesResponse extends SpeakeasyBase {
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
    listNetworkProfilesResult?: shared.ListNetworkProfilesResult;
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
