import { SpeakeasyBase } from "../../../internal/utils";
import { RequiresRecreationEnum } from "./requiresrecreationenum";
import { ResourceAttributeEnum } from "./resourceattributeenum";
/**
 * The field that CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.
 */
export declare class ResourceTargetDefinition extends SpeakeasyBase {
    attribute?: ResourceAttributeEnum;
    name?: string;
    requiresRecreation?: RequiresRecreationEnum;
}
