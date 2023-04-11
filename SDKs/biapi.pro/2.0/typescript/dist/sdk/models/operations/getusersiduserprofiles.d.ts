import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserProfilesRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * profiles
 */
export declare class GetUsersIdUserProfiles200ApplicationJSON extends SpeakeasyBase {
    profiles: shared.Profile[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * profiles
     */
    getUsersIdUserProfiles200ApplicationJSONObject?: GetUsersIdUserProfiles200ApplicationJSON;
}
