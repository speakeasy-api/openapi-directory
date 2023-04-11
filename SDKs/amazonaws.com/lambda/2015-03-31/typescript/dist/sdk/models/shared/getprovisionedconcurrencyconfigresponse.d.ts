import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";
/**
 * Success
 */
export declare class GetProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
    allocatedProvisionedConcurrentExecutions?: number;
    availableProvisionedConcurrentExecutions?: number;
    lastModified?: string;
    requestedProvisionedConcurrentExecutions?: number;
    status?: ProvisionedConcurrencyStatusEnumEnum;
    statusReason?: string;
}
