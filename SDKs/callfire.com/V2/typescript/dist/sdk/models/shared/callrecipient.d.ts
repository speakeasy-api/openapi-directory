import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1)
 */
export declare enum CallRecipientVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
/**
 * Recipient of a campaign action. Can be a phone number, contact, or contact list with attributes added to action. It is required to specify one of this values
 */
export declare class CallRecipient extends SpeakeasyBase {
    /**
     * Map of user-defined string attributes associated with recipient
     */
    attributes?: Record<string, string>;
    /**
     * An id of existing contact used as recipient
     */
    contactId?: number;
    /**
     * An IVR xml document describing dialplan to setup an IVR broadcast. If dialplan is set there is no need to set live, machine and transfer sounds (or vice versa)
     */
    dialplanXml?: string;
    /**
     * ~
     */
    fromNumber?: string;
    /**
     * Text to be turned into a sound, this text will be played when the phone is answered
     */
    liveMessage?: string;
    /**
     * An id of a sound file to play if phone is answered
     */
    liveMessageSoundId?: number;
    /**
     * Text to be used to turn into sound, this text will be played when answering machine is detected
     */
    machineMessage?: string;
    /**
     * An id of a sound file to play if answering machine is detected
     */
    machineMessageSoundId?: number;
    /**
     * Recipient's phone number in E.164 format (11-digit) or short code. Example: 12132000384
     */
    phoneNumber?: string;
    /**
     * A digit pressed to initiate the transfer
     */
    transferDigit?: string;
    /**
     * Text to be turned into sound, this text will be played when the transfer digit is played
     */
    transferMessage?: string;
    /**
     * An id of a sound file to play if call is transferred
     */
    transferMessageSoundId?: number;
    /**
     * Phone number in E.164 format (11-digit) to transfer the call to. Example: 12132000384
     */
    transferNumber?: string;
    /**
     * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1)
     */
    voice?: CallRecipientVoiceEnum;
}
