import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateTagGroupRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateTagGroup200ApplicationJSONTagGroup extends SpeakeasyBase {
    id: number;
    name: string;
    onePerTopic: boolean;
    parentTagName: any[];
    permissions: Record<string, any>;
    tagNames: any[];
}
/**
 * tag group created
 */
export declare class CreateTagGroup200ApplicationJSON extends SpeakeasyBase {
    tagGroup: CreateTagGroup200ApplicationJSONTagGroup;
}
export declare class CreateTagGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * tag group created
     */
    createTagGroup200ApplicationJSONObject?: CreateTagGroup200ApplicationJSON;
}
