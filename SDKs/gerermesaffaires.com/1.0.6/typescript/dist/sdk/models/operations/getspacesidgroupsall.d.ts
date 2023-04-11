import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdGroupsAllRequest extends SpeakeasyBase {
    /**
     * Name of the group
     */
    name?: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare class GetSpacesIdGroupsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of groups
     */
    getSpacesIdGroupsAll200ApplicationJSONAllOfs?: shared.Group[];
}
