import { SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberInformation } from "./phonenumberinformation";
/**
 * Success
 */
export declare class DescribePhoneNumbersResult extends SpeakeasyBase {
    nextToken?: string;
    phoneNumbers?: PhoneNumberInformation[];
}
