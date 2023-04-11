import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotAttributeNameEnum } from "./snapshotattributenameenum";
export declare class ResetSnapshotAttributeRequest extends SpeakeasyBase {
    attribute: SnapshotAttributeNameEnum;
    dryRun?: boolean;
    snapshotId: string;
}
