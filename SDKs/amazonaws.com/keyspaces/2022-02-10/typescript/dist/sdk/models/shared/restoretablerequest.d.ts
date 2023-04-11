import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySpecification } from "./capacityspecification";
import { EncryptionSpecification } from "./encryptionspecification";
import { PointInTimeRecovery } from "./pointintimerecovery";
import { Tag } from "./tag";
export declare class RestoreTableRequest extends SpeakeasyBase {
    capacitySpecificationOverride?: CapacitySpecification;
    encryptionSpecificationOverride?: EncryptionSpecification;
    pointInTimeRecoveryOverride?: PointInTimeRecovery;
    restoreTimestamp?: Date;
    sourceKeyspaceName: string;
    sourceTableName: string;
    tagsOverride?: Tag[];
    targetKeyspaceName: string;
    targetTableName: string;
}
