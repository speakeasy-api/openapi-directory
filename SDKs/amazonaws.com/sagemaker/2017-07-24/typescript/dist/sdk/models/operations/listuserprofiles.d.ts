import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListUserProfilesXAmzTargetEnum {
    SageMakerListUserProfiles = "SageMaker.ListUserProfiles"
}
export declare class ListUserProfilesRequest extends SpeakeasyBase {
    listUserProfilesRequest: shared.ListUserProfilesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserProfilesXAmzTargetEnum;
}
export declare class ListUserProfilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listUserProfilesResponse?: shared.ListUserProfilesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
