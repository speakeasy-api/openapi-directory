import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to describe application versions.
 */
export declare class DescribeApplicationVersionsMessage extends SpeakeasyBase {
    applicationName?: string;
    maxRecords?: number;
    nextToken?: string;
    versionLabels?: string[];
}
