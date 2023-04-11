import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySpecificationSummary } from "./capacityspecificationsummary";
import { ClientSideTimestamps } from "./clientsidetimestamps";
import { Comment } from "./comment";
import { EncryptionSpecification } from "./encryptionspecification";
import { PointInTimeRecoverySummary } from "./pointintimerecoverysummary";
import { SchemaDefinition } from "./schemadefinition";
import { TableStatusEnum } from "./tablestatusenum";
import { TimeToLive } from "./timetolive";
/**
 * Success
 */
export declare class GetTableResponse extends SpeakeasyBase {
    capacitySpecification?: CapacitySpecificationSummary;
    clientSideTimestamps?: ClientSideTimestamps;
    comment?: Comment;
    creationTimestamp?: Date;
    defaultTimeToLive?: number;
    encryptionSpecification?: EncryptionSpecification;
    keyspaceName: string;
    pointInTimeRecovery?: PointInTimeRecoverySummary;
    resourceArn: string;
    schemaDefinition?: SchemaDefinition;
    status?: TableStatusEnum;
    tableName: string;
    ttl?: TimeToLive;
}
