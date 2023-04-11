import { SpeakeasyBase } from "../../../internal/utils";
import { RotationRulesType } from "./rotationrulestype";
import { Tag } from "./tag";
/**
 * A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html">GetSecretValue</a> .
 */
export declare class SecretListEntry extends SpeakeasyBase {
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
    rotationEnabled?: boolean;
    rotationLambdaARN?: string;
    rotationRules?: RotationRulesType;
    secretVersionsToStages?: Record<string, string[]>;
    tags?: Tag[];
}
