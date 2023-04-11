import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpGeolocationWithConfidenceAreaAndHazardReportApiRequest extends SpeakeasyBase {
    /**
     * IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed
     *
     * @remarks
     *
     */
    ip?: string;
    /**
     * Your API key
     *
     * @remarks
     *
     */
    key?: string;
    /**
     * Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided
     *
     * @remarks
     *
     */
    localityLanguage?: string;
}
export declare class IpGeolocationWithConfidenceAreaAndHazardReportApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
