import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserProfilesIdProfileRequest extends SpeakeasyBase {
    expand?: string;
    idProfile: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class GetUsersIdUserProfilesIdProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful GET on Profile resource
     */
    profile?: shared.Profile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
