import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFactSearchSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetFactSearchRequest extends SpeakeasyBase {
    /**
     * Category to get the fact from
     */
    category?: string;
    /**
     * Text to search for in the facts
     */
    query?: string;
    /**
     * Sub Category to get the fact from
     */
    subcategory?: string;
}
export declare class GetFactSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
