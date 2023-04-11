import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetArticleByIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetArticleByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An Article
     */
    getArticleById200ApplicationJSONObject?: Record<string, any>;
}
