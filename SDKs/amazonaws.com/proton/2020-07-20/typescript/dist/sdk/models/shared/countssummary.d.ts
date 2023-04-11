import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCountsSummary } from "./resourcecountssummary";
/**
 * Summary counts of each Proton resource type.
 */
export declare class CountsSummary extends SpeakeasyBase {
    components?: ResourceCountsSummary;
    environmentTemplates?: ResourceCountsSummary;
    environments?: ResourceCountsSummary;
    pipelines?: ResourceCountsSummary;
    serviceInstances?: ResourceCountsSummary;
    serviceTemplates?: ResourceCountsSummary;
    services?: ResourceCountsSummary;
}
