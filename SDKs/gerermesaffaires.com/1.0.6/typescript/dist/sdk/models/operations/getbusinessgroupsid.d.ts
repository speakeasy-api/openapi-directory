import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBusinessGroupsIdSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetBusinessGroupsIdRequest extends SpeakeasyBase {
    /**
     * Id of the group
     */
    id: string;
}
/**
 * A group
 */
export declare class GetBusinessGroupsId200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    modificationDate?: string;
    name?: string;
}
export declare class GetBusinessGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A group
     */
    getBusinessGroupsId200ApplicationJSONObject?: GetBusinessGroupsId200ApplicationJSON;
}
