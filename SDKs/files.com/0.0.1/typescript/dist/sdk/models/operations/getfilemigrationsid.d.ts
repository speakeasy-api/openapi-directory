import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFileMigrationsIdRequest extends SpeakeasyBase {
    /**
     * File Migration ID.
     */
    id: number;
}
export declare class GetFileMigrationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileMigrations object.
     */
    fileMigrationEntity?: shared.FileMigrationEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
