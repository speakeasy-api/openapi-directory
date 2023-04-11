import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
export declare class UpdateEventDataStoreRequest extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    eventDataStore: string;
    kmsKeyId?: string;
    multiRegionEnabled?: boolean;
    name?: string;
    organizationEnabled?: boolean;
    retentionPeriod?: number;
    terminationProtectionEnabled?: boolean;
}
