import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of delivery reports to request from the delivering network.
 *
 * @remarks
 * The default value  is `ALL`. Please note that not all networks support delivery reports.
 * ALL. All possible delivery reports
 * ERRORS. Only error delivery reports
 * NONE. No delivery reports
 */
export declare enum SubmissionEntryDeliveryReportsEnum {
    All = "ALL",
    Errors = "ERRORS",
    None = "NONE"
}
/**
 * Describes the content of the message body.
 *
 * @remarks
 *
 * Typically this is TEXT, which is the default if no value is provided.
 *
 * If you need to send characters that are not covered by the [GSM 03.38](https://en.wikipedia.org/wiki/GSM_03.38) character set you will need to specify UNICODE.
 *
 * If you want to send a sequence of bytes, you must use BINARY.
 *
 * You can also or use the `auto-unicode` parameter of the Send Messages Operation.
 *
 * If you supply the value of `TEXT` while `auto-unicode` is `true` then your message may be converted to `UNICODE`.
 *
 * If you supply a value other than `TEXT` for this property while `auto-unicode` is `true` then no automatic conversion will take place.
 *
 */
export declare enum SubmissionEntryEncodingEnum {
    Text = "TEXT",
    Unicode = "UNICODE",
    Binary = "BINARY"
}
/**
 * The type of the sender id.
 *
 * @remarks
 *
 * If you want BulkSMS to collect replies to this message on your behalf, specify the type as REPLIABLE.  If the recipient is in a country where BulkSMS does not have a local reply number, the reply may incur costs that are more expensive than sending a local SMS in that country.
 * If you operate a service from a shortcode in a locale that allows messaging from such a shortcode, you can specify SHORTCODE for the type.
 *
 */
export declare enum SubmissionEntryFromTypeEnum {
    International = "INTERNATIONAL",
    Alphanumeric = "ALPHANUMERIC",
    Shortcode = "SHORTCODE",
    Repliable = "REPLIABLE"
}
/**
 * Identifies the sender.
 *
 * @remarks
 *
 * Instead of a structured object, you can supply a string value here.
 * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
 *
 */
export declare class SubmissionEntryFrom extends SpeakeasyBase {
    /**
     * The address of the sender id.
     *
     * @remarks
     *
     * The validation for this field depends on the value of the `type`.
     * INTERNATIONAL can start with `+`. It has a maximum length of 15 digits, and has to be longer than 6 digits.
     * ALPHANUMERIC has a maximum length of 11 characters.
     * SHORTCODE has a maximum length of 6 digits.
     * REPLIABLE should not specify a value here.
     *
     */
    address?: string;
    /**
     * The type of the sender id.
     *
     * @remarks
     *
     * If you want BulkSMS to collect replies to this message on your behalf, specify the type as REPLIABLE.  If the recipient is in a country where BulkSMS does not have a local reply number, the reply may incur costs that are more expensive than sending a local SMS in that country.
     * If you operate a service from a shortcode in a locale that allows messaging from such a shortcode, you can specify SHORTCODE for the type.
     *
     */
    type: SubmissionEntryFromTypeEnum;
}
/**
 * The class of the message, as specified by §4 of the GSM 03.38 specification.
 *
 * @remarks
 *
 * You can provide either an integer value, or a mnemonic string.
 *
 * The default value is SIM_SPECIFIC.
 * Numeric values are
 * | Name | Value|
 * |------|------|
 * | FLASH_SMS | 0      |
 * | ME_SPECIFIC | 1    |
 * | SIM_SPECIFIC | 2   |
 * | TE_SPECIFIC | 3   |
 *
 */
export declare enum SubmissionEntryMessageClassEnum {
    FlashSms = "FLASH_SMS",
    MeSpecific = "ME_SPECIFIC",
    SimSpecific = "SIM_SPECIFIC",
    TeSpecific = "TE_SPECIFIC"
}
/**
 * The TP-PID value from GSM 03.40[.750] §9.2.3.9.
 *
 * @remarks
 *
 * You can provide either an integer value, or a mnemonic string.
 *
 * If unspecified, this property defaults to `0`, representing the IMPLICIT value.
 * Numeric values are listed below
 * | Name | Value|
 * |----- |------|
 * | IMPLICIT              | 00 |
 * | SHORT_MESSAGE_TYPE_0  | 64 |
 * | REPLACE_MESSAGE_1     | 65 |
 * | REPLACE_MESSAGE_2     | 66 |
 * | REPLACE_MESSAGE_3     | 67 |
 * | REPLACE_MESSAGE_4     | 68 |
 * | REPLACE_MESSAGE_5     | 69 |
 * | REPLACE_MESSAGE_6     | 70 |
 * | REPLACE_MESSAGE_7     | 71 |
 * | RETURN_CALL           | 95 |
 * | ME_DOWNLOAD           | 125 |
 * | ME_DEPERSONALIZE      | 126 |
 * | SIM_DOWNLOAD          | 127 |
 *
 */
export declare enum SubmissionEntryProtocolIdEnum {
    Implicit = "IMPLICIT",
    ShortMessageType0 = "SHORT_MESSAGE_TYPE_0",
    ReplaceMessage1 = "REPLACE_MESSAGE_1",
    ReplaceMessage2 = "REPLACE_MESSAGE_2",
    ReplaceMessage3 = "REPLACE_MESSAGE_3",
    ReplaceMessage4 = "REPLACE_MESSAGE_4",
    ReplaceMessage5 = "REPLACE_MESSAGE_5",
    ReplaceMessage6 = "REPLACE_MESSAGE_6",
    ReplaceMessage7 = "REPLACE_MESSAGE_7",
    ReturnCall = "RETURN_CALL",
    MeDownload = "ME_DOWNLOAD",
    MeDepersonalize = "ME_DEPERSONALIZE",
    SimDownload = "SIM_DOWNLOAD"
}
/**
 * Allows you to choose routing. The default is STANDARD.
 *
 * @remarks
 *
 */
export declare enum SubmissionEntryRoutingGroupEnum {
    Economy = "ECONOMY",
    Standard = "STANDARD",
    Premium = "PREMIUM"
}
/**
 * Type of the recipient. The default value is INTERNATIONAL.
 */
export declare enum SubmissionEntryToTypeEnum {
    International = "INTERNATIONAL",
    Group = "GROUP"
}
export declare class SubmissionEntryTo extends SpeakeasyBase {
    /**
     * The phone number of the recipient.  It must be supplied if the `type` is INTERNATIONAL
     */
    address?: string;
    /**
     * Custom fields that can be used in the message body. A value can be given if the `type` is INTERNATIONAL
     *
     * @remarks
     *
     * Read the [body templates section](#tag/Message) for more information.
     *
     */
    fields?: string[];
    /**
     * The id of a group in your phonebook.  A value can be given if the `type` is GROUP.
     */
    id?: string;
    /**
     * The name of a group in your phonebook. A value can be given if the `type` is GROUP.
     */
    name?: string;
    /**
     * Type of the recipient. The default value is INTERNATIONAL.
     */
    type?: SubmissionEntryToTypeEnum;
}
/**
 * An object that you use when posting messages.
 */
export declare class SubmissionEntry extends SpeakeasyBase {
    /**
     * The message content as described in the `encoding`. If the `encoding` is BINARY, the body must contain only hexadecimal digits where one byte is represented as two digits. For example, if you want to send two bytes '0x05' and '0x1F', the message body must contain the text '051F'.
     *
     * @remarks
     *
     * The message content can also contain templates, read the [body templates section](#tag/Message) for more information.
     *
     */
    body: string;
    /**
     * The type of delivery reports to request from the delivering network.
     *
     * @remarks
     * The default value  is `ALL`. Please note that not all networks support delivery reports.
     * ALL. All possible delivery reports
     * ERRORS. Only error delivery reports
     * NONE. No delivery reports
     */
    deliveryReports?: SubmissionEntryDeliveryReportsEnum;
    /**
     * Describes the content of the message body.
     *
     * @remarks
     *
     * Typically this is TEXT, which is the default if no value is provided.
     *
     * If you need to send characters that are not covered by the [GSM 03.38](https://en.wikipedia.org/wiki/GSM_03.38) character set you will need to specify UNICODE.
     *
     * If you want to send a sequence of bytes, you must use BINARY.
     *
     * You can also or use the `auto-unicode` parameter of the Send Messages Operation.
     *
     * If you supply the value of `TEXT` while `auto-unicode` is `true` then your message may be converted to `UNICODE`.
     *
     * If you supply a value other than `TEXT` for this property while `auto-unicode` is `true` then no automatic conversion will take place.
     *
     */
    encoding?: SubmissionEntryEncodingEnum;
    /**
     * Identifies the sender.
     *
     * @remarks
     *
     * Instead of a structured object, you can supply a string value here.
     * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
     *
     */
    from?: SubmissionEntryFrom;
    /**
     * The maximum number of message parts that can be used for a [concatenated message](https://en.wikipedia.org/wiki/Concatenated_SMS).
     *
     * @remarks
     * The default is `3`.
     *
     */
    longMessageMaxParts?: number;
    /**
     * The class of the message, as specified by §4 of the GSM 03.38 specification.
     *
     * @remarks
     *
     * You can provide either an integer value, or a mnemonic string.
     *
     * The default value is SIM_SPECIFIC.
     * Numeric values are
     * | Name | Value|
     * |------|------|
     * | FLASH_SMS | 0      |
     * | ME_SPECIFIC | 1    |
     * | SIM_SPECIFIC | 2   |
     * | TE_SPECIFIC | 3   |
     *
     */
    messageClass?: SubmissionEntryMessageClassEnum;
    /**
     * The TP-PID value from GSM 03.40[.750] §9.2.3.9.
     *
     * @remarks
     *
     * You can provide either an integer value, or a mnemonic string.
     *
     * If unspecified, this property defaults to `0`, representing the IMPLICIT value.
     * Numeric values are listed below
     * | Name | Value|
     * |----- |------|
     * | IMPLICIT              | 00 |
     * | SHORT_MESSAGE_TYPE_0  | 64 |
     * | REPLACE_MESSAGE_1     | 65 |
     * | REPLACE_MESSAGE_2     | 66 |
     * | REPLACE_MESSAGE_3     | 67 |
     * | REPLACE_MESSAGE_4     | 68 |
     * | REPLACE_MESSAGE_5     | 69 |
     * | REPLACE_MESSAGE_6     | 70 |
     * | REPLACE_MESSAGE_7     | 71 |
     * | RETURN_CALL           | 95 |
     * | ME_DOWNLOAD           | 125 |
     * | ME_DEPERSONALIZE      | 126 |
     * | SIM_DOWNLOAD          | 127 |
     *
     */
    protocolId?: SubmissionEntryProtocolIdEnum;
    /**
     * Allows you to choose routing. The default is STANDARD.
     *
     * @remarks
     *
     */
    routingGroup?: SubmissionEntryRoutingGroupEnum;
    /**
     * Identifies the recipients
     *
     * @remarks
     *
     * Instead of an array of structured objects, you can also provide a single object, a simple string or an array of strings.
     * If you supply a string, the `type` is taken as INTERNATIONAL.
     *
     */
    to: SubmissionEntryTo[];
    /**
     * Correlate the messages created from this submission to your data.
     *
     * @remarks
     *
     * The value can contain no more than 20 characters.
     *
     */
    userSuppliedId?: string;
}
