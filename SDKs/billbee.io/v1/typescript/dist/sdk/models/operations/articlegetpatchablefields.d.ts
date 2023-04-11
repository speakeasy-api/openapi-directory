import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticleGetPatchableFieldsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleGetPatchableFields200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articleGetPatchableFields200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
