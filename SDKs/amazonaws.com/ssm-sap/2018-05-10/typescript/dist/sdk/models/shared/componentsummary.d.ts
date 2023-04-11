import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentTypeEnum } from "./componenttypeenum";
/**
 * The summary of the component.
 */
export declare class ComponentSummary extends SpeakeasyBase {
    applicationId?: string;
    componentId?: string;
    componentType?: ComponentTypeEnum;
    tags?: Record<string, string>;
}
