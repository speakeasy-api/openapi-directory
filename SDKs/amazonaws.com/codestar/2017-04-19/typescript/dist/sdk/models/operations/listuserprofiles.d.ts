import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListUserProfilesXAmzTargetEnum {
    CodeStar20170419ListUserProfiles = "CodeStar_20170419.ListUserProfiles"
}
export declare class ListUserProfilesRequest extends SpeakeasyBase {
    listUserProfilesRequest: shared.ListUserProfilesRequest;
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
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listUserProfilesResult?: shared.ListUserProfilesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
