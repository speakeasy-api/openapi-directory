import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateTagGroupRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateTagGroupRequest extends SpeakeasyBase {
    requestBody?: UpdateTagGroupRequestBody;
    id: string;
}
export declare class UpdateTagGroup200ApplicationJSONTagGroupPermissions extends SpeakeasyBase {
    everyone?: number;
}
export declare class UpdateTagGroup200ApplicationJSONTagGroup extends SpeakeasyBase {
    id?: number;
    name?: string;
    onePerTopic?: boolean;
    parentTagName?: any[];
    permissions?: UpdateTagGroup200ApplicationJSONTagGroupPermissions;
    tagNames?: any[];
}
/**
 * Tag group updated
 */
export declare class UpdateTagGroup200ApplicationJSON extends SpeakeasyBase {
    success?: string;
    tagGroup?: UpdateTagGroup200ApplicationJSONTagGroup;
}
export declare class UpdateTagGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tag group updated
     */
    updateTagGroup200ApplicationJSONObject?: UpdateTagGroup200ApplicationJSON;
}
