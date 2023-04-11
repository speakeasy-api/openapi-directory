import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentTypeEnum } from "./componenttypeenum";
/**
 * Version information for agent components.
 */
export declare class ComponentVersion extends SpeakeasyBase {
    componentType: ComponentTypeEnum;
    versions: string[];
}
