import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTagGroupRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetTagGroup200ApplicationJSONTagGroupPermissions extends SpeakeasyBase {
    everyone?: number;
}
export declare class GetTagGroup200ApplicationJSONTagGroup extends SpeakeasyBase {
    id?: number;
    name?: string;
    onePerTopic?: boolean;
    parentTagName?: any[];
    permissions?: GetTagGroup200ApplicationJSONTagGroupPermissions;
    tagNames?: any[];
}
/**
 * notifications
 */
export declare class GetTagGroup200ApplicationJSON extends SpeakeasyBase {
    tagGroup?: GetTagGroup200ApplicationJSONTagGroup;
}
export declare class GetTagGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * notifications
     */
    getTagGroup200ApplicationJSONObject?: GetTagGroup200ApplicationJSON;
}
