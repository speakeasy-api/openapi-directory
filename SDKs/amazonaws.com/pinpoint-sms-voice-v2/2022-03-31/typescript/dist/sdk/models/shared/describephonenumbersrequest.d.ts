import { SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberFilter } from "./phonenumberfilter";
export declare class DescribePhoneNumbersRequest extends SpeakeasyBase {
    filters?: PhoneNumberFilter[];
    maxResults?: number;
    nextToken?: string;
    phoneNumberIds?: string[];
}
