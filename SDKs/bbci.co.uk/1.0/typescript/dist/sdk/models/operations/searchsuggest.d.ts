import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchSuggestRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * The term to search for.
     */
    q: string;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
}
export declare class SearchSuggestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
