import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an opted out contact
 */
export declare class DoNotContactInput extends SpeakeasyBase {
    /**
     * A number on Do-Not-Call list
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
     * A single DNC number in E.164 format (11-digit). Example: 12132000384
     */
    number?: string;
    /**
     * The name of DNC source (can be the name of DNC list that user uploads to CallFire)
     */
    source?: string;
    /**
     * A number on Do-Not-Text list
     */
    text?: boolean;
}
/**
 * Represents an opted out contact
 */
export declare class DoNotContact extends SpeakeasyBase {
    /**
     * A number on Do-Not-Call list
     */
    call?: boolean;
    /**
     * An Id of a campaign which was used to send a message to DNC number
     */
    campaignId?: number;
    /**
     * A time when a given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    created?: number;
    /**
     * ~
     */
    inboundCall?: boolean;
    /**
     * ~
     */
    inboundText?: boolean;
    /**
     * A single DNC number in E.164 format (11-digit). Example: 12132000384
     */
    number?: string;
    /**
     * The name of DNC source (can be the name of DNC list that user uploads to CallFire)
     */
    source?: string;
    /**
     * A number on Do-Not-Text list
     */
    text?: boolean;
}
