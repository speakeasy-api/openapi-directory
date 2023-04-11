import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result of recognizing a business card, to extract the key information from the business card
 */
export declare class BusinessCardRecognitionResult extends SpeakeasyBase {
    /**
     * The address printed on the business card (if included on the business card)
     */
    addressString?: string;
    /**
     * The name of the business printed on the business card (if included on the business card)
     */
    businessName?: string;
    /**
     * The email address printed on the business card (if included on the business card)
     */
    emailAddress?: string;
    /**
     * The name of the person printed on the business card (if included on the business card)
     */
    personName?: string;
    /**
     * The title of the person printed on the business card (if included on the business card)
     */
    personTitle?: string;
    /**
     * The phone number printed on the business card (if included on the business card)
     */
    phoneNumber?: string;
    /**
     * True if the operation was successful, false otherwise
     */
    successful?: boolean;
    /**
     * The date and time printed on the business card (if included on the business card)
     */
    timestamp?: Date;
}
