import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesRequest extends SpeakeasyBase {
    /**
     * The language for any applicable localised strings.
     */
    lang: shared.LangEnum;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    ibl?: any;
}
