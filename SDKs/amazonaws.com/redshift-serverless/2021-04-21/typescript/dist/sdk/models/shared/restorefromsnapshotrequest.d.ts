import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreFromSnapshotRequest extends SpeakeasyBase {
    namespaceName: string;
    ownerAccount?: string;
    snapshotArn?: string;
    snapshotName?: string;
    workgroupName: string;
}
