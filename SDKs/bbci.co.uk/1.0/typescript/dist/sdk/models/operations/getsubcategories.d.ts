import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSubCategoriesRequest extends SpeakeasyBase {
    /**
     * The category identifier to return results from.
     */
    category: string;
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
}
export declare class GetSubCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
