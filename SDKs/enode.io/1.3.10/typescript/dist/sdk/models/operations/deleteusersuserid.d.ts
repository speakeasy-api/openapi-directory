import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUsersUseridSecurity extends SpeakeasyBase {
    clientAccessToken: string;
}
export declare class DeleteUsersUseridRequest extends SpeakeasyBase {
    /**
     * ID of the User
     */
    userId: string;
}
export declare class DeleteUsersUseridResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
