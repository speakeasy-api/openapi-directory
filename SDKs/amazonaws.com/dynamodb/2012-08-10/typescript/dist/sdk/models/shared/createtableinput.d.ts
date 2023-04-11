import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { KeySchemaElement } from "./keyschemaelement";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SSESpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";
import { TableClassEnum } from "./tableclassenum";
import { Tag } from "./tag";
/**
 * Represents the input of a <code>CreateTable</code> operation.
 */
export declare class CreateTableInput extends SpeakeasyBase {
    attributeDefinitions: AttributeDefinition[];
    billingMode?: BillingModeEnum;
    deletionProtectionEnabled?: boolean;
    globalSecondaryIndexes?: GlobalSecondaryIndex[];
    keySchema: KeySchemaElement[];
    localSecondaryIndexes?: LocalSecondaryIndex[];
    provisionedThroughput?: ProvisionedThroughput;
    sseSpecification?: SSESpecification;
    streamSpecification?: StreamSpecification;
    tableClass?: TableClassEnum;
    tableName: string;
    tags?: Tag[];
}
