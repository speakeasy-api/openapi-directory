import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis.
 */
export declare enum DescribeVoicesEngineEnum {
    Standard = "standard",
    Neural = "neural"
}
/**
 *  The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned.
 */
export declare enum DescribeVoicesLanguageCodeEnum {
    Arb = "arb",
    CmnCN = "cmn-CN",
    CyGB = "cy-GB",
    DaDK = "da-DK",
    DEDE = "de-DE",
    EnAU = "en-AU",
    EnGB = "en-GB",
    EnGBWLS = "en-GB-WLS",
    EnIN = "en-IN",
    EnUS = "en-US",
    ESES = "es-ES",
    EsMX = "es-MX",
    EsUS = "es-US",
    FrCA = "fr-CA",
    FRFR = "fr-FR",
    ISIS = "is-IS",
    ITIT = "it-IT",
    JaJP = "ja-JP",
    HiIN = "hi-IN",
    KoKR = "ko-KR",
    NbNO = "nb-NO",
    NLNL = "nl-NL",
    PLPL = "pl-PL",
    PtBR = "pt-BR",
    PTPT = "pt-PT",
    RORO = "ro-RO",
    RURU = "ru-RU",
    SvSE = "sv-SE",
    TRTR = "tr-TR",
    EnNZ = "en-NZ",
    EnZA = "en-ZA",
    CaES = "ca-ES",
    DeAT = "de-AT",
    YueCN = "yue-CN",
    ArAE = "ar-AE",
    FIFI = "fi-FI"
}
export declare class DescribeVoicesRequest extends SpeakeasyBase {
    /**
     * Specifies the engine (<code>standard</code> or <code>neural</code>) used by Amazon Polly when processing input text for speech synthesis.
     */
    engine?: DescribeVoicesEngineEnum;
    /**
     * Boolean value indicating whether to return any bilingual voices that use the specified language as an additional language. For instance, if you request all languages that use US English (es-US), and there is an Italian voice that speaks both Italian (it-IT) and US English, that voice will be included if you specify <code>yes</code> but not if you specify <code>no</code>.
     */
    includeAdditionalLanguageCodes?: boolean;
    /**
     *  The language identification tag (ISO 639 code for the language name-ISO 3166 country code) for filtering the list of voices returned. If you don't specify this optional parameter, all available voices are returned.
     */
    languageCode?: DescribeVoicesLanguageCodeEnum;
    /**
     * An opaque pagination token returned from the previous <code>DescribeVoices</code> operation. If present, this indicates where to continue the listing.
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeVoicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVoicesOutput?: shared.DescribeVoicesOutput;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceFailureException
     */
    serviceFailureException?: any;
}
