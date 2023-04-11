import { SpeakeasyBase } from "../../../internal/utils";
import { RecorderStatusEnum } from "./recorderstatusenum";
/**
 * <p>The current status of the configuration recorder.</p> <note> <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p> </note>
 */
export declare class ConfigurationRecorderStatus extends SpeakeasyBase {
    lastErrorCode?: string;
    lastErrorMessage?: string;
    lastStartTime?: Date;
    lastStatus?: RecorderStatusEnum;
    lastStatusChangeTime?: Date;
    lastStopTime?: Date;
    name?: string;
    recording?: boolean;
}
