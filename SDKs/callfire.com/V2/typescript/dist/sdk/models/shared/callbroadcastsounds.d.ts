import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1)
 */
export declare enum CallBroadcastSoundsDncSoundTextVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
/**
 * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1) for a live sound
 */
export declare enum CallBroadcastSoundsLiveSoundTextVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
/**
 * The voice to be used (MALE1, FEMALE1 , FEMALE2, SPANISH1, FRENCHCANADIAN1) for a machine sound
 */
export declare enum CallBroadcastSoundsMachineSoundTextVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
/**
 * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1) for a sound transfer
 */
export declare enum CallBroadcastSoundsTransferSoundTextVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
/**
 * A set of sounds assigned to a voice broadcast to play according to an answering machine configuration. You can add the existing sounds from the account's sound library or to provide a text which will be converted into a speech. There are four sound options available for a Voice Broadcast campaign
 */
export declare class CallBroadcastSounds extends SpeakeasyBase {
    /**
     * Digit pressed to place contact in DNC list
     */
    dncDigit?: string;
    /**
     * An id of sound file to play when recipient decided to opt out and pressed DNC digit
     */
    dncSoundId?: number;
    /**
     * Text to be turned into sound, plays to notify that Do Not Call digit has been pressed and inform your contact of their placement on the Do Not Call list
     */
    dncSoundText?: string;
    /**
     * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1)
     */
    dncSoundTextVoice?: CallBroadcastSoundsDncSoundTextVoiceEnum;
    /**
     * An id of sound file to play if phone is answered
     */
    liveSoundId?: number;
    /**
     * Text to be used to turned into a sound. This text will be played when the phone is answered
     */
    liveSoundText?: string;
    /**
     * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1) for a live sound
     */
    liveSoundTextVoice?: CallBroadcastSoundsLiveSoundTextVoiceEnum;
    /**
     * An id of a sound file to play if answering machine is detected
     */
    machineSoundId?: number;
    /**
     * Text to be turned into a sound. This text will be played when answering machine is detected
     */
    machineSoundText?: string;
    /**
     * The voice to be used (MALE1, FEMALE1 , FEMALE2, SPANISH1, FRENCHCANADIAN1) for a machine sound
     */
    machineSoundTextVoice?: CallBroadcastSoundsMachineSoundTextVoiceEnum;
    /**
     * Digit pressed to initiate a transfer
     */
    transferDigit?: string;
    /**
     * Phone number in E.164 format (11-digit) to transfer call to.  Example: 12132000384, 67076
     */
    transferNumber?: string;
    /**
     * An id of a file to play if call is transferred
     */
    transferSoundId?: number;
    /**
     * Text to be turned into a sound. This text will be played when the transfer digit is played
     */
    transferSoundText?: string;
    /**
     * The voice to be used (MALE1, FEMALE1, FEMALE2, SPANISH1, FRENCHCANADIAN1) for a sound transfer
     */
    transferSoundTextVoice?: CallBroadcastSoundsTransferSoundTextVoiceEnum;
}
