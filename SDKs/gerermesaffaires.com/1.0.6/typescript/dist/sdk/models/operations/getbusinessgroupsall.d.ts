import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBusinessGroupsAllSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetBusinessGroupsAllRequest extends SpeakeasyBase {
    /**
     * Name of the group
     */
    name?: string;
}
export declare class GetBusinessGroupsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of groups
     */
    getBusinessGroupsAll200ApplicationJSONAllOfs?: shared.BusinessGroup[];
}
