import { SpeakeasyBase } from "../../../internal/utils";
import { OptionConfigurationList } from "./optionconfigurationlist";
/**
 * <p/>
 */
export declare class ModifyOptionGroupMessage extends SpeakeasyBase {
    applyImmediately?: boolean;
    optionGroupName: string;
    optionsToInclude?: OptionConfigurationList[];
    optionsToRemove?: string[];
}
