import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDatabaseUsersRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    databaseNamePathParameter: string;
    /**
     * Name of the database.
     */
    databaseNameQueryParameter: string;
}
export declare class GetDatabaseUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    mySqlUsers?: shared.MySqlUser[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
