import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountUpdateNameSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountUpdateNameRequestBody extends SpeakeasyBase {
    /**
     * User name. Max length: 128 chars.
     */
    name: string;
}
export declare class AccountUpdateNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
