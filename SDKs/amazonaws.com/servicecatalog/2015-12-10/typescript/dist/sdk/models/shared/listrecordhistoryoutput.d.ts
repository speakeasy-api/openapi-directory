import { SpeakeasyBase } from "../../../internal/utils";
import { RecordDetail } from "./recorddetail";
/**
 * Success
 */
export declare class ListRecordHistoryOutput extends SpeakeasyBase {
    nextPageToken?: string;
    recordDetails?: RecordDetail[];
}
