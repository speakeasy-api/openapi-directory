import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFactRandomSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetFactRandomRequest extends SpeakeasyBase {
    /**
     * Category to get the fact from
     */
    category?: string;
    /**
     * Sub Category to get the fact from
     */
    subcategory?: string;
}
export declare class GetFactRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
