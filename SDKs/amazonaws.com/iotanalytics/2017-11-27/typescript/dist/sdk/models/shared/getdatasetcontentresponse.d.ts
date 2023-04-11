import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentStatus } from "./datasetcontentstatus";
import { DatasetEntry } from "./datasetentry";
/**
 * Success
 */
export declare class GetDatasetContentResponse extends SpeakeasyBase {
    entries?: DatasetEntry[];
    status?: DatasetContentStatus;
    timestamp?: Date;
}
