import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateResourceIdentifier } from "./aggregateresourceidentifier";
import { BaseConfigurationItem } from "./baseconfigurationitem";
/**
 * Success
 */
export declare class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
    baseConfigurationItems?: BaseConfigurationItem[];
    unprocessedResourceIdentifiers?: AggregateResourceIdentifier[];
}
