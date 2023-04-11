import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result of processing.
 */
export declare enum As2OutgoingMessageEntityProcessingResultEnum {
    NotStarted = "not_started",
    SendFailed = "send_failed",
    SendSuccess = "send_success",
    SendSuccessMdnInvalid = "send_success_mdn_invalid",
    SendSuccessMicMismatch = "send_success_mic_mismatch",
    SendSuccessMessageIdMismatch = "send_success_message_id_mismatch",
    SendSuccessSignatureMismatch = "send_success_signature_mismatch",
    SendSuccessProcessingFailure = "send_success_processing_failure",
    SendFailedUnknownHost = "send_failed_unknown_host",
    SendFailedBadHttpResponseCode = "send_failed_bad_http_response_code",
    SendFailedSslError = "send_failed_ssl_error",
    SendFailedConnectionRefused = "send_failed_connection_refused"
}
/**
 * List As2 Outgoing Messages
 */
export declare class As2OutgoingMessageEntity extends SpeakeasyBase {
    /**
     * JSON Structure of the activity log.
     */
    activityLog?: string;
    /**
     * AS2 FROM
     */
    as2From?: string;
    /**
     * Id of the AS2 Partner associated with this message.
     */
    as2PartnerId?: number;
    /**
     * Id of the AS2 Station associated with this message.
     */
    as2StationId?: number;
    /**
     * AS2 TO
     */
    as2To?: string;
    /**
     * Filename of the file being sent.
     */
    attachmentFilename?: string;
    /**
     * Encrypted Payload Body Size
     */
    bodySize?: string;
    /**
     * Message creation date/time
     */
    createdAt?: Date;
    /**
     * Date Header
     */
    date?: string;
    /**
     * URL to download the encrypted signed smime that is to sent as AS2 body
     */
    encryptedUri?: string;
    /**
     * HTTP Headers sent with this message.
     */
    httpHeaders?: Record<string, any>;
    /**
     * HTTP Response Code received for this message
     */
    httpResponseCode?: string;
    /**
     * HTTP Headers received for this message.
     */
    httpResponseHeaders?: Record<string, any>;
    /**
     * HTTP transmission duration in seceonds
     */
    httpTransmissionDuration?: number;
    /**
     * Id of the AS2 Partner.
     */
    id?: number;
    /**
     * MDN message id matched?
     */
    mdnMessageIdMatched?: boolean;
    /**
     * MDN MIC matched?
     */
    mdnMicMatched?: boolean;
    /**
     * MDN disposition indicate a successful processing?
     */
    mdnProcessingSuccess?: boolean;
    /**
     * Did the partner give a response body?
     */
    mdnReceived?: boolean;
    /**
     * URL to download the http response body
     */
    mdnResponseUri?: string;
    /**
     * MDN signature verified?
     */
    mdnSignatureVerified?: boolean;
    /**
     * Is the response in MDN format?
     */
    mdnValid?: boolean;
    /**
     * AS2 Message Id
     */
    messageId?: string;
    /**
     * AS2 Message Integrity Check SHA1
     */
    mic?: string;
    /**
     * AS2 Message Integrity Check SHA256
     */
    micSha256?: string;
    /**
     * Result of processing.
     */
    processingResult?: As2OutgoingMessageEntityProcessingResultEnum;
    /**
     * Result of processing description.
     */
    processingResultDescription?: string;
    /**
     * URL to download the original file contents
     */
    rawUri?: string;
    /**
     * URL to download the file contents as smime with signature
     */
    smimeSignedUri?: string;
    /**
     * URL to download the file contents encoded as smime
     */
    smimeUri?: string;
    /**
     * UUID assigned to this message.
     */
    uuid?: string;
}
