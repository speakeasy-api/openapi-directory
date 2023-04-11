import { SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";
import { ChannelDefinition } from "./channeldefinition";
import { Media } from "./media";
export declare class StartCallAnalyticsJobRequest extends SpeakeasyBase {
    callAnalyticsJobName: string;
    channelDefinitions?: ChannelDefinition[];
    dataAccessRoleArn?: string;
    media: Media;
    outputEncryptionKMSKeyId?: string;
    outputLocation?: string;
    settings?: CallAnalyticsJobSettings;
}
