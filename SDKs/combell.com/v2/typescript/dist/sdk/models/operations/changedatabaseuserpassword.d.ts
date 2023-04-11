import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeDatabaseUserPasswordRequest extends SpeakeasyBase {
    /**
     * Contains the new password.
     */
    updateUserPasswordRequest?: shared.UpdateUserPasswordRequest;
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
export declare class ChangeDatabaseUserPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
