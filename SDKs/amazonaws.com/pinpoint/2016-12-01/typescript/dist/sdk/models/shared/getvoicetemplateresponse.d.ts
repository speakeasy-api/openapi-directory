import { SpeakeasyBase } from "../../../internal/utils";
import { VoiceTemplateResponse } from "./voicetemplateresponse";
/**
 * Success
 */
export declare class GetVoiceTemplateResponse extends SpeakeasyBase {
    /**
     * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
     */
    voiceTemplateResponse: VoiceTemplateResponse;
}
