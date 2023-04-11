import { SpeakeasyBase } from "../../../internal/utils";
import { DataSet } from "./dataset";
import { ExternalLocation } from "./externallocation";
/**
 * Identifies a specific data set to import from an external location.
 */
export declare class DataSetImportItem extends SpeakeasyBase {
    dataSet: DataSet;
    externalLocation: ExternalLocation;
}
