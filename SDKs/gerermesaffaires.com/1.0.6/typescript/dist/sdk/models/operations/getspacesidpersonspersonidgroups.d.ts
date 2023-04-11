import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdPersonsPersonIdGroupsRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to get groups
     */
    personId: string;
}
export declare class GetSpacesIdPersonsPersonIdGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of groups
     */
    getSpacesIdPersonsPersonIdGroups200ApplicationJSONAllOfs?: shared.Group[];
}
