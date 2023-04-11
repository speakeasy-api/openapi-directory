import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBusinessGroupsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetBusinessGroupsRequest extends SpeakeasyBase {
    /**
     * Name of the group
     */
    name?: string;
}
export declare class GetBusinessGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of groups
     */
    getBusinessGroups200ApplicationJSONAllOfs?: shared.BusinessGroup[];
}
