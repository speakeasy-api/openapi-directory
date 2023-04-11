import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A voice to be used. Available values: MALE1, FEMALE1 , FEMALE2, SPANISH1, FRENCHCANADIAN1
 */
export declare enum TextToSpeechVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
/**
 * Request object is used to create a sound from provided text using text to speech engine
 */
export declare class TextToSpeech extends SpeakeasyBase {
    /**
     * A text to be turned into sound
     */
    message?: string;
    /**
     * A voice to be used. Available values: MALE1, FEMALE1 , FEMALE2, SPANISH1, FRENCHCANADIAN1
     */
    voice?: TextToSpeechVoiceEnum;
}
