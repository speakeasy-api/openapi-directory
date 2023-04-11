import { SpeakeasyBase } from "../../../internal/utils";
import { ImageAttributeNameEnum } from "./imageattributenameenum";
/**
 * Contains the parameters for DescribeImageAttribute.
 */
export declare class DescribeImageAttributeRequest extends SpeakeasyBase {
    attribute: ImageAttributeNameEnum;
    dryRun?: boolean;
    imageId: string;
}
