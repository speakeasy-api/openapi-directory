import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Requests a list of AWS Cost and Usage reports owned by the account.
 */
export declare class DescribeReportDefinitionsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results that AWS returns for the operation.
     */
    maxResults?: number;
    /**
     * A generic string.
     */
    nextToken?: string;
}
