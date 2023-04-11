import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { KeySchemaElement } from "./keyschemaelement";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SSESpecification } from "./ssespecification";
/**
 *  The parameters for the table created as part of the import operation.
 */
export declare class TableCreationParameters extends SpeakeasyBase {
    attributeDefinitions: AttributeDefinition[];
    billingMode?: BillingModeEnum;
    globalSecondaryIndexes?: GlobalSecondaryIndex[];
    keySchema: KeySchemaElement[];
    /**
     * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
     */
    provisionedThroughput?: ProvisionedThroughput;
    /**
     * Represents the settings used to enable server-side encryption.
     */
    sseSpecification?: SSESpecification;
    tableName: string;
}
