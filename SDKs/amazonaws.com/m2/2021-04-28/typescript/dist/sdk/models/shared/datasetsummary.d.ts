import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A subset of the possible data set attributes.
 */
export declare class DataSetSummary extends SpeakeasyBase {
    creationTime?: Date;
    dataSetName: string;
    dataSetOrg?: string;
    format?: string;
    lastReferencedTime?: Date;
    lastUpdatedTime?: Date;
}
