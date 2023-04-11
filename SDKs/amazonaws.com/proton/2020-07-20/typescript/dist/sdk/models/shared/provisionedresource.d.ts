import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedResourceEngineEnum } from "./provisionedresourceengineenum";
/**
 * Detail data for a provisioned resource.
 */
export declare class ProvisionedResource extends SpeakeasyBase {
    identifier?: string;
    name?: string;
    provisioningEngine?: ProvisionedResourceEngineEnum;
}
