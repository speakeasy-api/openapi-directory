import { SpeakeasyBase } from "../../../internal/utils";
import { ResetImageAttributeNameEnum } from "./resetimageattributenameenum";
/**
 * Contains the parameters for ResetImageAttribute.
 */
export declare class ResetImageAttributeRequest extends SpeakeasyBase {
    attribute: ResetImageAttributeNameEnum;
    dryRun?: boolean;
    imageId: string;
}
