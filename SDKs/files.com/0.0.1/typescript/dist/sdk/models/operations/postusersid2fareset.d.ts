import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersId2faResetRequest extends SpeakeasyBase {
    /**
     * User ID.
     */
    id: number;
}
export declare class PostUsersId2faResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
