import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQueryRequest extends SpeakeasyBase {
    oneProperty: string;
    onePropertyValue: string;
    pLimit: number;
    path: string;
}
export declare class GetQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getQueryDefaultApplicationJSONString?: string;
}
