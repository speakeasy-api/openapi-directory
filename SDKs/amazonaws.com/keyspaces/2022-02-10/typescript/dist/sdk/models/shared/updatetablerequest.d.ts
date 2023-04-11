import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySpecification } from "./capacityspecification";
import { ClientSideTimestamps } from "./clientsidetimestamps";
import { ColumnDefinition } from "./columndefinition";
import { EncryptionSpecification } from "./encryptionspecification";
import { PointInTimeRecovery } from "./pointintimerecovery";
import { TimeToLive } from "./timetolive";
export declare class UpdateTableRequest extends SpeakeasyBase {
    addColumns?: ColumnDefinition[];
    capacitySpecification?: CapacitySpecification;
    clientSideTimestamps?: ClientSideTimestamps;
    defaultTimeToLive?: number;
    encryptionSpecification?: EncryptionSpecification;
    keyspaceName: string;
    pointInTimeRecovery?: PointInTimeRecovery;
    tableName: string;
    ttl?: TimeToLive;
}
