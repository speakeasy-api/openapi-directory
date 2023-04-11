import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    namespaceName: string;
    retentionPeriod?: number;
    snapshotName: string;
    tags?: Tag[];
}
