import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEcRequest extends SpeakeasyBase {
    /**
     * **The format of the returned analysis.**
     *
     * @remarks
     *
     * Allowed values are *json*, *xml* and *yaml*.
     *
     * The default value is *xml*.
     *
     */
    outputFormat?: string;
    /**
     * **The password to be analyzed.**
     *
     * @remarks
     *
     * Minimum length is 4 characters; maximum length is 128 characters.
     *
     * Beware that certain characters like '&#35;', '&#61;' or '&#63;' must be properly encoded.
     *
     * For more information about this issue, please refer to RFC 3986 ("*Uniform Resource Identifier (URI): Generic Syntax*"), sections 2.1, 2.2 and 2.4.
     *
     */
    password: string;
    /**
     * **The penalty applied to each character that is part of a word, number sequence, alphabet sequence, etc.**
     *
     * @remarks
     *
     * The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.
     *
     * The character used as decimal separator is always '&#46;'. Hence, a parameter value like *0,33* would be illegal.
     *
     * The default value is *0.25*.
     *
     */
    penalty?: number;
    /**
     * **An identifier for this request.**
     *
     * @remarks
     *
     * The request identifier is a string that must match the regular expression * /(?i)^[a-z0-9]{8,16}$/*.
     *
     * This identifier is echoed in the returned response. Its value has no effect on the password analysis.
     *
     * If this parameter is unset, a randomly generated identifier will be automatically assigned to this request.
     *
     */
    reqId?: string;
}
export declare class GetEcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The password analysis, including the calculated entropy.
     */
    ec?: shared.Ec;
}
