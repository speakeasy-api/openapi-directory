import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostBusinessGroupsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * BusinessGroup to add
 */
export declare class PostBusinessGroupsRequestBody extends SpeakeasyBase {
    name: string;
}
/**
 * Id of group created
 */
export declare class PostBusinessGroups201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostBusinessGroupsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of group created
     */
    postBusinessGroups201ApplicationJSONObject?: PostBusinessGroups201ApplicationJSON;
}
