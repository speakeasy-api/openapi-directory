import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQueryRequest extends SpeakeasyBase {
    oneProperty: string;
    onePropertyValue: string;
    pLimit: number;
    path: string;
}
export declare class PostQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postQueryDefaultApplicationJSONString?: string;
}
