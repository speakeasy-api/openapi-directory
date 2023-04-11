import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUsersUseridAuthorizationSecurity extends SpeakeasyBase {
    clientAccessToken: string;
}
export declare class DeleteUsersUseridAuthorizationRequest extends SpeakeasyBase {
    /**
     * ID of the User
     */
    userId: string;
}
export declare class DeleteUsersUseridAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
