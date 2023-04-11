import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutFactSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class PutFactRequest extends SpeakeasyBase {
    /**
     * Category of the fact
     */
    category: string;
    /**
     * Fact Text
     */
    fact: string;
    /**
     * Sub Category of the fact
     */
    subcategory: string;
    /**
     * Tags
     */
    tags: string;
}
export declare class PutFactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
