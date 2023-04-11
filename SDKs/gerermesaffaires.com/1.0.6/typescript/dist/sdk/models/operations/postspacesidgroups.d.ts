import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdGroupsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * Group
 */
export declare class PostSpacesIdGroupsRequestBody extends SpeakeasyBase {
    endDate?: string;
    name: string;
}
export declare class PostSpacesIdGroupsRequest extends SpeakeasyBase {
    /**
     * Group
     */
    requestBody: PostSpacesIdGroupsRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of company entity created
 */
export declare class PostSpacesIdGroups201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdGroupsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of company entity created
     */
    postSpacesIdGroups201ApplicationJSONObject?: PostSpacesIdGroups201ApplicationJSON;
}
