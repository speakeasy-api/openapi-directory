import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class DescribeSecretResponse extends SpeakeasyBase {
    arn?: string;
    createdDate?: Date;
    deletedDate?: Date;
    description?: string;
    kmsKeyId?: string;
    lastAccessedDate?: Date;
    lastChangedDate?: Date;
    lastRotatedDate?: Date;
    name?: string;
    nextRotationDate?: Date;
    owningService?: string;
    primaryRegion?: string;
    replicationStatus?: ReplicationStatusType[];
    rotationEnabled?: boolean;
    rotationLambdaARN?: string;
    rotationRules?: RotationRulesType;
    tags?: Tag[];
    versionIdsToStages?: Record<string, string[]>;
}
