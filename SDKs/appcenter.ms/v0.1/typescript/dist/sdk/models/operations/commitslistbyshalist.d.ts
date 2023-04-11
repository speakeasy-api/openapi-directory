import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CommitsListByShaListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class CommitsListByShaListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * A collection of commit SHAs comma-delimited
     */
    hashes: string[];
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class CommitsListByShaList200ApplicationJSONCommitAuthor extends SpeakeasyBase {
    /**
     * Date and time of the commit
     */
    date?: string;
    /**
     * Author's email
     */
    email?: string;
    /**
     * Author name
     */
    name?: string;
}
export declare class CommitsListByShaList200ApplicationJSONCommit extends SpeakeasyBase {
    author?: CommitsListByShaList200ApplicationJSONCommitAuthor;
    /**
     * Commit message
     */
    message?: string;
}
export declare class CommitsListByShaList200ApplicationJSON extends SpeakeasyBase {
    commit?: CommitsListByShaList200ApplicationJSONCommit;
    /**
     * The commit SHA
     */
    sha?: string;
    /**
     * The URL to the commit
     */
    url?: string;
}
export declare class CommitsListByShaListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    commitsListByShaList200ApplicationJSONObjects?: CommitsListByShaList200ApplicationJSON[];
}
