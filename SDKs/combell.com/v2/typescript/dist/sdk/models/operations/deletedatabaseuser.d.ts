import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDatabaseUserRequest extends SpeakeasyBase {
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
export declare class DeleteDatabaseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
