import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFactFodSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetFactFodRequest extends SpeakeasyBase {
    /**
     * Category to get the fact of the day from. Must be one from the list returned from /fact/fod/categories
     */
    category?: string;
}
export declare class GetFactFodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
