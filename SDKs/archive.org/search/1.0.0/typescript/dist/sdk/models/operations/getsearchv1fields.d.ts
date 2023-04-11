import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSearchV1FieldsRequest extends SpeakeasyBase {
    /**
     * Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
     */
    callback?: string;
}
export declare class GetSearchV1FieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Fields that can be requested
     */
    fields?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
