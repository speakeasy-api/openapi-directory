import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { Tag } from "./tag";
export declare class CreateEventDataStoreRequest extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    kmsKeyId?: string;
    multiRegionEnabled?: boolean;
    name: string;
    organizationEnabled?: boolean;
    retentionPeriod?: number;
    /**
     * A list of tags.
     */
    tagsList?: Tag[];
    terminationProtectionEnabled?: boolean;
}
