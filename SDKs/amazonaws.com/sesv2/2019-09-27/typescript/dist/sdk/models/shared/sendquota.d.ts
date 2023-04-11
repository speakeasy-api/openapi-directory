import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.
 */
export declare class SendQuota extends SpeakeasyBase {
    max24HourSend?: number;
    maxSendRate?: number;
    sentLast24Hours?: number;
}
