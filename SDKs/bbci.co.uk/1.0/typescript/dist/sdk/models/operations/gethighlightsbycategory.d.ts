import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHighlightsByCategoryRequest extends SpeakeasyBase {
    /**
     * Whether to return all, or available programmes
     */
    availability: shared.AvailabilityEnum;
    /**
     * The category identifier to return results from.
     */
    category: string;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
    /**
     * Request additional data in the output
     */
    mixin?: shared.MixinEnum;
    /**
     * The rights group to limit results to.
     */
    rights: shared.RightsEnum;
}
export declare class GetHighlightsByCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
