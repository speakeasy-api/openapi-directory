import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedConcurrencyConfigListItem } from "./provisionedconcurrencyconfiglistitem";
/**
 * Success
 */
export declare class ListProvisionedConcurrencyConfigsResponse extends SpeakeasyBase {
    nextMarker?: string;
    provisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
}
