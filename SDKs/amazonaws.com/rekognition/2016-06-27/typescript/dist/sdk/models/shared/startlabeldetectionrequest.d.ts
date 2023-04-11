import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDetectionFeatureNameEnum } from "./labeldetectionfeaturenameenum";
import { LabelDetectionSettings } from "./labeldetectionsettings";
import { NotificationChannel } from "./notificationchannel";
import { Video } from "./video";
export declare class StartLabelDetectionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    features?: LabelDetectionFeatureNameEnum[];
    jobTag?: string;
    minConfidence?: number;
    notificationChannel?: NotificationChannel;
    settings?: LabelDetectionSettings;
    video: Video;
}
