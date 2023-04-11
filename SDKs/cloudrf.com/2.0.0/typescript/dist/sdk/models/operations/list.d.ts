import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class ListRequest extends SpeakeasyBase {
    /**
     * East bounding box
     */
    e?: number;
    /**
     * North bounding box
     */
    n?: number;
    /**
     * South bounding box
     */
    s?: number;
    /**
     * West bounding box
     */
    w?: number;
}
export declare class ListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
