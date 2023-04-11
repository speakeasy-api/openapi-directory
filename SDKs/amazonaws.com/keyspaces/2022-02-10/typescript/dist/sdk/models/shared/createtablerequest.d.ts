import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySpecification } from "./capacityspecification";
import { ClientSideTimestamps } from "./clientsidetimestamps";
import { Comment } from "./comment";
import { EncryptionSpecification } from "./encryptionspecification";
import { PointInTimeRecovery } from "./pointintimerecovery";
import { SchemaDefinition } from "./schemadefinition";
import { Tag } from "./tag";
import { TimeToLive } from "./timetolive";
export declare class CreateTableRequest extends SpeakeasyBase {
    capacitySpecification?: CapacitySpecification;
    clientSideTimestamps?: ClientSideTimestamps;
    comment?: Comment;
    defaultTimeToLive?: number;
    encryptionSpecification?: EncryptionSpecification;
    keyspaceName: string;
    pointInTimeRecovery?: PointInTimeRecovery;
    schemaDefinition: SchemaDefinition;
    tableName: string;
    tags?: Tag[];
    ttl?: TimeToLive;
}
