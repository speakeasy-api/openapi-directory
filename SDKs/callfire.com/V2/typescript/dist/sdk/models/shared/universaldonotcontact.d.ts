import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Universal (platform-wide) Do-Not-Contact object for a given phone number. Shows whether inbound/outbound actions are allowed for a given number.
 */
export declare class UniversalDoNotContact extends SpeakeasyBase {
    /**
     * Optional source number in E.164 format (11-digit). Example: 12132000384
     */
    fromNumber?: string;
    /**
     * If toNumber can receive calls or If toNumber can call fromNumber.
     */
    inboundCall?: boolean;
    /**
     * If toNumber can receive texts or If toNumber can text fromNumber.
     */
    inboundText?: boolean;
    /**
     * If toNumber can send calls or If fromNumber can call toNumber.
     */
    outboundCall?: boolean;
    /**
     * If toNumber can send texts or If fromNumber can text toNumber.
     */
    outboundText?: boolean;
    /**
     * destination DNC number in E.164 format (11-digit). Example: 12132000384
     */
    toNumber?: string;
}
