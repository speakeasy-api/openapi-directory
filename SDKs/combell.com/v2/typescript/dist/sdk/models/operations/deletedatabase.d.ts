import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDatabaseRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    databaseNamePathParameter: string;
    /**
     * Name of the database.
     */
    databaseNameQueryParameter: string;
}
export declare class DeleteDatabaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
