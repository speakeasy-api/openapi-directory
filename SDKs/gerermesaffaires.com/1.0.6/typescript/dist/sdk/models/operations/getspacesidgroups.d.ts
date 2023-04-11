import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdGroupsRequest extends SpeakeasyBase {
    /**
     * Name of the groups
     */
    name?: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of groups
     */
    getSpacesIdGroups200ApplicationJSONAllOfs?: shared.Group[];
}
