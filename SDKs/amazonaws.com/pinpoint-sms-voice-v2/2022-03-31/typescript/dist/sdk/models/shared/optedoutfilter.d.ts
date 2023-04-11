import { SpeakeasyBase } from "../../../internal/utils";
import { OptedOutFilterNameEnum } from "./optedoutfilternameenum";
/**
 * The information for opted out numbers that meet a specified criteria.
 */
export declare class OptedOutFilter extends SpeakeasyBase {
    name: OptedOutFilterNameEnum;
    values: string[];
}
