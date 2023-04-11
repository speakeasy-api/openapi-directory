import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInstanceProfilesXAmzTargetEnum {
    DeviceFarm20150623ListInstanceProfiles = "DeviceFarm_20150623.ListInstanceProfiles"
}
export declare class ListInstanceProfilesRequest extends SpeakeasyBase {
    listInstanceProfilesRequest: shared.ListInstanceProfilesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstanceProfilesXAmzTargetEnum;
}
export declare class ListInstanceProfilesResponse extends SpeakeasyBase {
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
    listInstanceProfilesResult?: shared.ListInstanceProfilesResult;
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
