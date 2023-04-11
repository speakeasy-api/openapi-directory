import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchBusinessGroupsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * BusinessGroup to modify
 */
export declare class PatchBusinessGroupsRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class PatchBusinessGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
