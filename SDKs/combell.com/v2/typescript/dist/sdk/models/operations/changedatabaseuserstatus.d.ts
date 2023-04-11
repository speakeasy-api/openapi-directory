import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeDatabaseUserStatusRequest extends SpeakeasyBase {
    /**
     * Whether the user is enabled or not.
     */
    updateUserStatusRequest?: shared.UpdateUserStatusRequest;
    /**
     * Automatically added
     */
    databaseNamePathParameter: string;
    /**
     * Name of the database.
     */
    databaseNameQueryParameter: string;
    /**
     * Automatically added
     */
    userNamePathParameter: string;
    /**
     * Name of the user.
     */
    userNameQueryParameter: string;
}
export declare class ChangeDatabaseUserStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
