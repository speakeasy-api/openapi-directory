import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request object for adding new Do-Not-Contact records to account.
 */
export declare class AddDoNotContactRequest extends SpeakeasyBase {
    /**
     * If set to true add all given numbers to Do-Not-Call list. Default value: true
     */
    call?: boolean;
    /**
     * ~
     */
    inboundCall?: boolean;
    /**
     * ~
     */
    inboundText?: boolean;
    /**
     * A list of phone numbers in E.164 format (11-digit), example: 12132000384, 14142777322
     */
    numbers?: string[];
    /**
     * A list of new contact objects which need to be added. Default value: Api V2
     */
    source?: string;
    /**
     * If set to true add all given numbers to Do-Not-Text list. Default value: true
     */
    text?: boolean;
}
