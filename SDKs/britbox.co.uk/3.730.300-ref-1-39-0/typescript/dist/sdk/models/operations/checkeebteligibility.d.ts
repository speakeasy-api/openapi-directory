import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckEeBtEligibilitySecurity extends SpeakeasyBase {
    accountAuth: string;
}
export declare class CheckEeBtEligibilityRequest extends SpeakeasyBase {
    /**
     * Language code for the preferred language to be returned in the response.
     *
     * @remarks
     *
     * Parameter value is case-insensitive and should be
     *   - a valid 2 letter language code without region such as en, de
     *   - or with region such as en_us, en_au
     *
     * If undefined then defaults to 'en', unless the server has been configured
     * with a custom default.
     *
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    lang?: string;
}
export declare class CheckEeBtEligibilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success, returns eligibility data.
     */
    eeBtEligibility?: shared.EeBtEligibility;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
