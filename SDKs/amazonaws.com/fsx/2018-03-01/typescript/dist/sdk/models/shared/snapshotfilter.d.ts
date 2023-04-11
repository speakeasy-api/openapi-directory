import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotFilterNameEnum } from "./snapshotfilternameenum";
/**
 * A filter used to restrict the results of <code>DescribeSnapshots</code> calls. You can use multiple filters to return results that meet all applied filter requirements.
 */
export declare class SnapshotFilter extends SpeakeasyBase {
    name?: SnapshotFilterNameEnum;
    values?: string[];
}
