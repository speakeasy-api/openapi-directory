import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserProfilesMainRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class GetUsersIdUserProfilesMainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful GET on Profile resource
     */
    profile?: shared.Profile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
