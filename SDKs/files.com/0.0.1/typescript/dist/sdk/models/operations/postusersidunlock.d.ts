import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUnlockRequest extends SpeakeasyBase {
    /**
     * User ID.
     */
    id: number;
}
export declare class PostUsersIdUnlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
