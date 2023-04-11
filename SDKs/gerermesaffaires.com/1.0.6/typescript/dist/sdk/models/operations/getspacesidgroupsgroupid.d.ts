import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdGroupsGroupIdRequest extends SpeakeasyBase {
    /**
     * Id of the group
     */
    groupId: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare enum GetSpacesIdGroupsGroupId200ApplicationJSONAccessesRightEnum {
    Read = "read",
    Write = "write"
}
export declare class GetSpacesIdGroupsGroupId200ApplicationJSONAccesses extends SpeakeasyBase {
    id?: string;
    name?: string;
    right?: GetSpacesIdGroupsGroupId200ApplicationJSONAccessesRightEnum;
}
export declare class GetSpacesIdGroupsGroupId200ApplicationJSONPersons extends SpeakeasyBase {
    memberId?: string;
}
/**
 * A company entity
 */
export declare class GetSpacesIdGroupsGroupId200ApplicationJSON extends SpeakeasyBase {
    accesses?: GetSpacesIdGroupsGroupId200ApplicationJSONAccesses;
    endDate?: string;
    id?: string;
    name?: string;
    persons?: GetSpacesIdGroupsGroupId200ApplicationJSONPersons;
}
export declare class GetSpacesIdGroupsGroupIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A company entity
     */
    getSpacesIdGroupsGroupId200ApplicationJSONObject?: GetSpacesIdGroupsGroupId200ApplicationJSON;
}
