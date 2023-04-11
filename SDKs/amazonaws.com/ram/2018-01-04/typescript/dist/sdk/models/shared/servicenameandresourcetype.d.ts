import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRegionScopeEnum } from "./resourceregionscopeenum";
/**
 * Information about a shareable resource type and the Amazon Web Services service to which resources of that type belong.
 */
export declare class ServiceNameAndResourceType extends SpeakeasyBase {
    resourceRegionScope?: ResourceRegionScopeEnum;
    resourceType?: string;
    serviceName?: string;
}
