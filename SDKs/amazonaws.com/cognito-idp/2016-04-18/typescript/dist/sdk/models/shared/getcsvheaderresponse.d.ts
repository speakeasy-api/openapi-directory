import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the response from the server to the request to get the header information of the CSV file for the user import job.
 */
export declare class GetCSVHeaderResponse extends SpeakeasyBase {
    csvHeader?: string[];
    userPoolId?: string;
}
