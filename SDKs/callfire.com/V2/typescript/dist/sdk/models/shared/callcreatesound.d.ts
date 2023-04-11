import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request object is used for creating sound via a phone call. This sound will appear in account's sound library
 */
export declare class CallCreateSound extends SpeakeasyBase {
    /**
     * Name of a sound to create
     */
    name?: string;
    /**
     * Phone number in E.164 11-digit format to call to record a sound.  Example: 12132000384
     */
    toNumber?: string;
}
