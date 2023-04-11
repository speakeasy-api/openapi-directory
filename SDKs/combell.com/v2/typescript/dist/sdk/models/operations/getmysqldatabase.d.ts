import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMySqlDatabaseRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    databaseNamePathParameter: string;
    databaseNameQueryParameter: string;
}
export declare class GetMySqlDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    mySqlDatabase?: shared.MySqlDatabase;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
