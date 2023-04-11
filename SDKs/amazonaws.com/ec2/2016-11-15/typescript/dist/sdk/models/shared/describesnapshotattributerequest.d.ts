import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotAttributeNameEnum } from "./snapshotattributenameenum";
export declare class DescribeSnapshotAttributeRequest extends SpeakeasyBase {
    attribute: SnapshotAttributeNameEnum;
    dryRun?: boolean;
    snapshotId: string;
}
