import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SSESpecification } from "./ssespecification";
export declare class RestoreTableFromBackupInput extends SpeakeasyBase {
    backupArn: string;
    billingModeOverride?: BillingModeEnum;
    globalSecondaryIndexOverride?: GlobalSecondaryIndex[];
    localSecondaryIndexOverride?: LocalSecondaryIndex[];
    provisionedThroughputOverride?: ProvisionedThroughput;
    sseSpecificationOverride?: SSESpecification;
    targetTableName: string;
}
