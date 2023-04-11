import { SpeakeasyBase } from "../../../internal/utils";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndex } from "./globalsecondaryindex";
import { LocalSecondaryIndex } from "./localsecondaryindex";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { SSESpecification } from "./ssespecification";
export declare class RestoreTableToPointInTimeInput extends SpeakeasyBase {
    billingModeOverride?: BillingModeEnum;
    globalSecondaryIndexOverride?: GlobalSecondaryIndex[];
    localSecondaryIndexOverride?: LocalSecondaryIndex[];
    provisionedThroughputOverride?: ProvisionedThroughput;
    restoreDateTime?: Date;
    sseSpecificationOverride?: SSESpecification;
    sourceTableArn?: string;
    sourceTableName?: string;
    targetTableName: string;
    useLatestRestorableTime?: boolean;
}
