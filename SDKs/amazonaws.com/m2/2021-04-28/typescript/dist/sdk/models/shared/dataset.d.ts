import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetOrgAttributes } from "./datasetorgattributes";
import { RecordLength } from "./recordlength";
/**
 * Defines a data set.
 */
export declare class DataSet extends SpeakeasyBase {
    datasetName: string;
    datasetOrg: DatasetOrgAttributes;
    recordLength: RecordLength;
    relativePath?: string;
    storageType?: string;
}
