import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMySqlUserRequest extends SpeakeasyBase {
    createMySqlUser?: shared.CreateMySqlUser;
    /**
     * Automatically added
     */
    databaseNamePathParameter: string;
    /**
     * Name of the database.
     */
    databaseNameQueryParameter: string;
}
export declare class CreateMySqlUserResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
