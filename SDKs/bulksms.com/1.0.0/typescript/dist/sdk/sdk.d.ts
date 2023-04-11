import { Attachments } from "./attachments";
import { BlockedNumbers } from "./blockednumbers";
import { Credits } from "./credits";
import { Message } from "./message";
import * as shared from "./models/shared";
import { Profile } from "./profile";
import { Webhooks } from "./webhooks";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.bulksms.com/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * ## Overview
 *
 * @remarks
 *
 * The JSON REST API allows you to submit and receive [BulkSMS](https://www.bulksms.com/) messages. You can also get access to past messages and see your account profile.
 *
 * The base URL to use for this service is `https://api.bulksms.com/v1`.  The base URL cannot be used on its own; you must append a path that identifies an operation and you may have to specify some path parameters as well.
 *
 * [Click here](/developer/) to go to the main BulkSMS developer site.
 *
 * In order to give you an idea on how the API can be used, some JSON snippets are provided below.  Have a look at the [messages section](#tag/Message) for more information.
 *
 * Probably the most simple example
 *
 * ```
 * {
 *     "to": "+27001234567",
 *     "body": "Hello World!"
 * }
 * ```
 *
 *
 * You can send unicode automatically using the `auto-unicode` query parameter.
 * Alternatively, you can specify `UNICODE` for the `encoding` property in the request body.
 * Please note: when `auto-unicode` is specified and the value of the `encoding` property is `UNICODE`, the message will always be sent as `UNICODE`.
 *
 * Here is an example that sets the `encoding` explicitly
 *
 * ```
 * {
 *   "to": "+27001234567",
 *   "body": "Dobrá práce! Jak se máš?",
 *   "encoding": "UNICODE"
 * }
 * ```
 *
 * You can also specify a from number
 *
 * ```
 * {
 *     "from": "+27007654321",
 *     "to": "+27001234567",
 *     "body": "Hello World!"
 * }
 * ```
 *
 * Similar to above, but repliable
 *
 * ```
 * {
 *     "from": { "type": "REPLIABLE" },
 *     "to": "+27001234567",
 *     "body": "Hello World!"
 * }
 * ```
 *
 * A message to a group called Everyone
 *
 * ```
 * {
 *     "to": { "type": "GROUP", "name": "Everyone" },
 *     "body": "Hello World!"
 * }
 * ```
 *
 * A message to multiple recipients
 *
 * ```
 * {
 *     "to": ["+27001234567", "+27002345678", "+27003456789"],
 *     "body": "Happy Holidays!"
 * }
 * ```
 *
 * Sending more than one message in the same request
 *
 * ```
 * [
 *     {
 *         "to": "+27001234567",
 *         "body": "Hello World!"
 *     },
 *     {
 *         "to": "+27002345678",
 *         "body": "Hello Universe!"
 *     }
 * ]
 * ```
 *
 * **The insecure base URL `http://api.bulksms.com/v1` is deprecated** and may in future result in a `301` redirect response, or insecure requests may be rejected outright. Please use the secure (`https`) URI above.
 *
 * ### HTTP Content Type
 *
 * All API methods expect requests to supply a `Content-Type` header with the value `application/json`. All responses will have the `Content-Type` header set to `application/json`.
 *
 * ### JSON Formatting
 *
 * You are advised to format your JSON resources according to strict JSON format rules. While the API does attempt to parse strictly invalid JSON documents, doing so may lead to incorrect interpretation and unexpected results.
 *
 * Good JSON libraries will produce valid JSON suitable for submission, but if you are manually generating the JSON text, be careful to follow the JSON format. This include correct escaping of control characters and double quoting of property names.
 *
 * See the [JSON specification](https://tools.ietf.org/html/rfc4627) for further information.
 *
 * ### Date Formatting
 *
 * Dates are formatted according to ISO-8601, such as `1970-01-01T10:00:00+01:00` for 1st January 1970, 10AM UTC+1.
 *
 * See the [Wikipedia ISO 8601 reference](https://en.wikipedia.org/wiki/ISO_8601) for further information.
 *
 * Specifically, calendar dates are formatted with the 'extended' format `YYYY-MM-DD`. Basic format, week dates and ordinal dates are not supported. Times are also formatted in the 'extended' format `hh:mm:ss`. Hours, minutes and seconds are mandatory. Offset from UTC must be provided; this is to ensure that there is no misunderstanding regarding times provided to the API.
 *
 * The format we look for is `yyyy-MM-ddThh:mm:ss[Z|[+-]hh:mm]`
 *
 * Examples of valid date/times are`2011-12-31T12:00:00Z` `2011-12-31T12:00:00+02:00`
 *
 * ### Entity Format Modifications
 *
 * It is expected that over time some changes will be made to the request and response formats of various methods available in the API.
 * Where possible, these will be implemented in a backwards compatible way.
 * To make this possible you are required to ignore unknown properties.
 * This enables the addition of information in response documents while maintaining compatibility with older clients.
 *
 * ### Optional Request Entity Properties
 *
 * There are many instances where requests can be made without having to specify every single property allowable in the request format.
 * Any such optional properties are noted as such in the documentation and their default value is noted.
 *
 */
export declare class SDK {
    attachments: Attachments;
    blockedNumbers: BlockedNumbers;
    credits: Credits;
    message: Message;
    profile: Profile;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
