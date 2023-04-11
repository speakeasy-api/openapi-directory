import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Describes updates or additions to a dataset. A Single update or addition is an entry (JSON Line) that provides information about a single image. To update an existing entry, you match the <code>source-ref</code> field of the update entry with the <code>source-ref</code> filed of the entry that you want to update. If the <code>source-ref</code> field doesn't match an existing entry, the entry is added to dataset as a new entry.
 */
export declare class DatasetChanges extends SpeakeasyBase {
    groundTruth: string;
}
