import { SpeakeasyBase } from "../../../internal/utils";
import { RegionOfInterest } from "./regionofinterest";
import { StreamProcessorDataSharingPreference } from "./streamprocessordatasharingpreference";
import { StreamProcessorInput } from "./streamprocessorinput";
import { StreamProcessorNotificationChannel } from "./streamprocessornotificationchannel";
import { StreamProcessorOutput } from "./streamprocessoroutput";
import { StreamProcessorSettings } from "./streamprocessorsettings";
import { StreamProcessorStatusEnum } from "./streamprocessorstatusenum";
/**
 * Success
 */
export declare class DescribeStreamProcessorResponse extends SpeakeasyBase {
    creationTimestamp?: Date;
    dataSharingPreference?: StreamProcessorDataSharingPreference;
    input?: StreamProcessorInput;
    kmsKeyId?: string;
    lastUpdateTimestamp?: Date;
    name?: string;
    /**
     * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation.</p> <p>Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4.</p> <p>Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</p>
     */
    notificationChannel?: StreamProcessorNotificationChannel;
    output?: StreamProcessorOutput;
    regionsOfInterest?: RegionOfInterest[];
    roleArn?: string;
    settings?: StreamProcessorSettings;
    status?: StreamProcessorStatusEnum;
    statusMessage?: string;
    streamProcessorArn?: string;
}
