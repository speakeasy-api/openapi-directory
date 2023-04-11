import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result of processing.
 */
export declare enum As2IncomingMessageEntityProcessingResultEnum {
    NotStarted = "not_started",
    UnableToFindStation = "unable_to_find_station",
    UnableToFindPartner = "unable_to_find_partner",
    UnableToValidateSignature = "unable_to_validate_signature",
    DecryptFail = "decrypt_fail",
    FileSaveFail = "file_save_fail",
    Success = "success"
}
/**
 * List As2 Incoming Messages
 */
export declare class As2IncomingMessageEntity extends SpeakeasyBase {
    /**
     * JSON Structure of the activity log.
     */
    activityLog?: string;
    /**
     * AS2 FROM header of message
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
     * AS2 TO header of message
     */
    as2To?: string;
    /**
     * Filename of the file being received.
     */
    attachmentFilename?: string;
    /**
     * Encrypted Payload Body Size
     */
    bodySize?: string;
    /**
     * Content Type header of the incoming message.
     */
    contentType?: string;
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
     * Incoming Message Recipient(the Client Cert used to encrypt this message)'s serial in hex format.
     */
    hexRecipientSerial?: string;
    /**
     * HTTP Headers sent with this message.
     */
    httpHeaders?: Record<string, any>;
    /**
     * HTTP Response Code sent for this message
     */
    httpResponseCode?: string;
    /**
     * HTTP Headers sent for this message.
     */
    httpResponseHeaders?: Record<string, any>;
    /**
     * Id of the AS2 Partner.
     */
    id?: number;
    /**
     * IP Address of the Sender
     */
    ip?: string;
    /**
     * URL to download the http response body
     */
    mdnResponseUri?: string;
    /**
     * Message decrypted successfully?
     */
    messageDecrypted?: boolean;
    /**
     * AS2 Message Id
     */
    messageId?: string;
    /**
     * MDN returned?
     */
    messageMdnReturned?: boolean;
    /**
     * Message processed successfully?
     */
    messageProcessingSuccess?: boolean;
    /**
     * Message body received?
     */
    messageReceived?: boolean;
    /**
     * Message signature verified?
     */
    messageSignatureVerified?: boolean;
    /**
     * AS2 Message Integrity Check
     */
    mic?: string;
    /**
     * AS2 Message Integrity Check Algorithm Used
     */
    micAlgo?: string;
    /**
     * Result of processing.
     */
    processingResult?: As2IncomingMessageEntityProcessingResultEnum;
    /**
     * Result of processing description.
     */
    processingResultDescription?: string;
    /**
     * URL to download the original file contents
     */
    rawUri?: string;
    /**
     * Incoming Message Recipient(the Client Cert used to encrypt this message)'s issuer
     */
    recipientIssuer?: string;
    /**
     * Incoming Message Recipient(the Client Cert used to encrypt this message)'s serial
     */
    recipientSerial?: string;
    /**
     * URL to download the file contents as smime with signature
     */
    smimeSignedUri?: string;
    /**
     * URL to download the file contents encoded as smime
     */
    smimeUri?: string;
    /**
     * AS2 Subject Header
     */
    subject?: string;
    /**
     * UUID assigned to this message.
     */
    uuid?: string;
}
