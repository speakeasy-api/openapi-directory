import { SpeakeasyBase } from "../../../internal/utils";
import { PathPrefixEnum } from "./pathprefixenum";
import { PrefixFormatEnum } from "./prefixformatenum";
import { PrefixTypeEnum } from "./prefixtypeenum";
/**
 * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
 */
export declare class PrefixConfig extends SpeakeasyBase {
    pathPrefixHierarchy?: PathPrefixEnum[];
    prefixFormat?: PrefixFormatEnum;
    prefixType?: PrefixTypeEnum;
}
