import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendCallsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The voice set by default for all text-to-speech messages defined in CallRecipient objects or as default *Message properties
 */
export declare enum SendCallsDefaultVoiceEnum {
    Male1 = "MALE1",
    Female1 = "FEMALE1",
    Female2 = "FEMALE2",
    Spanish1 = "SPANISH1",
    Frenchcanadian1 = "FRENCHCANADIAN1"
}
export declare class SendCallsRequest extends SpeakeasyBase {
    /**
     * An array of CallRecipient objects.
     *
     * @remarks
     * Limitations:
     * 1. Max number of CallRecipient objects is 10
     *
     */
    requestBody?: shared.CallRecipient[];
    /**
     * Specifies a campaignId to send calls quickly on a previously created campaign
     */
    campaignId?: number;
    /**
     * Text to be turned into a sound, this text will be played when the phone is answered. Parameter can be overridden for any particular CallRecipient
     */
    defaultLiveMessage?: string;
    /**
     * Id of sound file to play if phone is answered. Parameter can be overridden for any particular CallRecipient
     */
    defaultLiveMessageSoundId?: number;
    /**
     * Text to be turned into a sound, this text will be played when answering machine is detected. Parameter can be overridden for any particular CallRecipient
     */
    defaultMachineMessage?: string;
    /**
     * An id of a sound file to play if answering machine is detected. Parameter can be overridden for any particular CallRecipient
     */
    defaultMachineMessageSoundId?: number;
    /**
     * The voice set by default for all text-to-speech messages defined in CallRecipient objects or as default *Message properties
     */
    defaultVoice?: SendCallsDefaultVoiceEnum;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class SendCallsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    callList?: shared.CallList;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
