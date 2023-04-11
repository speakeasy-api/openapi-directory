import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSetFilterNameEnum } from "./configurationsetfilternameenum";
/**
 * The information for configuration sets that meet a specified criteria.
 */
export declare class ConfigurationSetFilter extends SpeakeasyBase {
    name: ConfigurationSetFilterNameEnum;
    values: string[];
}
