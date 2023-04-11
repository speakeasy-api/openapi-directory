import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SnapshotModel extends SpeakeasyBase {
    created?: Date;
    createdBy?: string;
    description?: string;
    id?: string;
    indexProgress?: Record<string, number>;
    published?: boolean;
    status?: string;
}
