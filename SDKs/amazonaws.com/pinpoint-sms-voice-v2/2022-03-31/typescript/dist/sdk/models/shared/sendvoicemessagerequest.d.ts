import { SpeakeasyBase } from "../../../internal/utils";
import { VoiceIdEnum } from "./voiceidenum";
import { VoiceMessageBodyTextTypeEnum } from "./voicemessagebodytexttypeenum";
export declare class SendVoiceMessageRequest extends SpeakeasyBase {
    configurationSetName?: string;
    context?: Record<string, string>;
    destinationPhoneNumber: string;
    dryRun?: boolean;
    maxPricePerMinute?: string;
    messageBody?: string;
    messageBodyTextType?: VoiceMessageBodyTextTypeEnum;
    originationIdentity: string;
    timeToLive?: number;
    voiceId?: VoiceIdEnum;
}
