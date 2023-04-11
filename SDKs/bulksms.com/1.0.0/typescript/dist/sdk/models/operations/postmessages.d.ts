import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMessagesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostMessagesRequest extends SpeakeasyBase {
    /**
     * Contains details of the message (or messages) that you want to send.
     *
     * @remarks
     *
     * One `SubmissionEntry` can produce many messages, and your request may contain multiple such entries.
     *
     */
    requestBody: shared.SubmissionEntry[];
    /**
     * Specifies how to deal with message text that contains characters not present in the GSM 03.38 character set.
     *
     * @remarks
     *
     * Messages that contain only GSM 03.38 characters are not affected by this setting.
     * If the value is `true` then a message containing non-GSM 03.38 characters will be transmitted as a Unicode SMS (which is most likely more costly).
     *
     * Please note: when `auto-unicode` is `true` and the value of the `encoding` property is specified as `UNICODE`, the message will always be sent as `UNICODE`.
     *
     * If the value is `false` and the `encoding` property is `TEXT` then non-GSM 03.38 characters will be replaced by the `?` character.
     *
     * When using this setting on the API, you should take case to ensure that your message is _clean_.
     *
     * Invisible unicode and unexpected characters could unintentionally convert an message to `UNICODE`.  A common mistake is to use the backtick character (\`) which is unicode and will turn your `TEXT` message into a `UNICODE` message.
     *
     */
    autoUnicode?: boolean;
    /**
     * Safeguards against the possibility of sending the same messages more than once.
     *
     * @remarks
     *
     * If a communication failure occurs during a submission, you cannot be sure that the submission was processed; therefore you would have to submit it again. When you post the retry, you must use the `deduplication-id` of the original post. The BulkSMS system uses this ID to check that the request was not previously processed. (If it was previously processed, the submission will succeed, and the behaviour will be indistinguishable to you from a non-duplicated submission). The ID expires after about 12 hours.
     *
     */
    deduplicationId?: number;
    /**
     * Allows you to send a message in the future.
     *
     * @remarks
     *
     * An example value is `2019-02-18T13:00:00+02:00`.  It encodes to `2019-02-18T13%3A00%3A00%2B02%3A00`.
     * Credits are deducted from your account immediately. Once submitted, scheduled messages cannot be changed or cancelled.
     * The date can be a maximum of two years in the future. If the value is in the past, the message will be sent immediately.
     * The date format requires you to supply an offset from UTC. You can decide to use the offset of your timezone, or maybe the zone of the recipient's location is more appropriate.
     * If the destination is a group, the group members are determined at the time that you submit the message; not the time the message is scheduled to be sent.
     *
     */
    scheduleDate?: Date;
    /**
     * A note that is stored together with a scheduled submission, which could be used to more easily identify the scheduled submission at a later date.
     *
     * @remarks
     *
     * The value of this field is ignored if the `schedule-date` is not provided.
     * A value that is longer than 256 characters is truncated.
     *
     */
    scheduleDescription?: string;
}
export declare class PostMessagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request. The content or structure of your submission, or a parameter, was found to be invalid.
     */
    error?: shared.ErrorT;
    /**
     * An array of the messages that were created from the request
     */
    messages?: shared.Message[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
