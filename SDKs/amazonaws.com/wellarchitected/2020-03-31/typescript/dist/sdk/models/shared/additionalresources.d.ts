import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalResourceTypeEnum } from "./additionalresourcetypeenum";
import { ChoiceContent } from "./choicecontent";
/**
 * The choice level additional resources.
 */
export declare class AdditionalResources extends SpeakeasyBase {
    content?: ChoiceContent[];
    type?: AdditionalResourceTypeEnum;
}
