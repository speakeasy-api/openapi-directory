import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConfigRequest extends SpeakeasyBase {
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
