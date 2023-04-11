import { SpeakeasyBase } from "../../../internal/utils";
import { RequiresRecreationEnum } from "./requiresrecreationenum";
import { ResourceAttributeEnum } from "./resourceattributeenum";
/**
 * Information about a change to a resource attribute.
 */
export declare class ResourceTargetDefinition extends SpeakeasyBase {
    attribute?: ResourceAttributeEnum;
    name?: string;
    requiresRecreation?: RequiresRecreationEnum;
}
