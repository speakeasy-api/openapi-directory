import { SpeakeasyBase } from "../../../internal/utils";
import { VoiceEngineEnum } from "./voiceengineenum";
/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
 */
export declare class VoiceSettings extends SpeakeasyBase {
    engine?: VoiceEngineEnum;
    voiceId: string;
}
