import { SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";
/**
 * Success
 */
export declare class RestoreFromSnapshotResponse extends SpeakeasyBase {
    /**
     * A collection of database objects and users.
     */
    namespace?: Namespace;
    ownerAccount?: string;
    snapshotName?: string;
}
