import { SpeakeasyBase } from "../../../internal/utils";
export declare class PersonalInfo extends SpeakeasyBase {
    /**
     * The time zone identifier based on the list of values /v2/user/lov/BeezUPTimeZone
     */
    beezUPTimeZoneId: number;
    /**
     * Your first name
     */
    firstName: string;
    /**
     * Your last name
     */
    lastName: string;
    /**
     * Your phone number
     */
    phoneNumber: string;
    /**
     * Your role in your company
     */
    whatIDo?: string;
}
