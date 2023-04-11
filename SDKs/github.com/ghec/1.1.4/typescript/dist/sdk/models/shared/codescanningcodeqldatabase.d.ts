import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
/**
 * A CodeQL database.
 */
export declare class CodeScanningCodeqlDatabase extends SpeakeasyBase {
    /**
     * The MIME type of the CodeQL database file.
     */
    contentType: string;
    /**
     * The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    createdAt: Date;
    /**
     * The ID of the CodeQL database.
     */
    id: number;
    /**
     * The language of the CodeQL database.
     */
    language: string;
    /**
     * The name of the CodeQL database.
     */
    name: string;
    /**
     * The size of the CodeQL database file in bytes.
     */
    size: number;
    /**
     * The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    updatedAt: Date;
    /**
     * A GitHub user.
     */
    uploader: SimpleUser;
    /**
     * The URL at which to download the CodeQL database. The `Accept` header must be set to the value of the `content_type` property.
     */
    url: string;
}
