import { SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberFilterNameEnum } from "./phonenumberfilternameenum";
/**
 * The information for a phone number that meets a specified criteria.
 */
export declare class PhoneNumberFilter extends SpeakeasyBase {
    name: PhoneNumberFilterNameEnum;
    values: string[];
}
