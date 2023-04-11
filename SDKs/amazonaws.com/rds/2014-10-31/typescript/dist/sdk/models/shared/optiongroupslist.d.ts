import { SpeakeasyBase } from "../../../internal/utils";
import { OptionsList } from "./optionslist";
/**
 * <p/>
 */
export declare class OptionGroupsList extends SpeakeasyBase {
    allowsVpcAndNonVpcInstanceMemberships?: boolean;
    copyTimestamp?: Date;
    engineName?: string;
    majorEngineVersion?: string;
    optionGroupArn?: string;
    optionGroupDescription?: string;
    optionGroupName?: string;
    options?: OptionsList[];
    sourceAccountId?: string;
    sourceOptionGroup?: string;
    vpcId?: string;
}
