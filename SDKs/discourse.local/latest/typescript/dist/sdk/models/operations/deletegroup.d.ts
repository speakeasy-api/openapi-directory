import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteGroupRequest extends SpeakeasyBase {
    id: number;
}
/**
 * response
 */
export declare class DeleteGroup200ApplicationJSON extends SpeakeasyBase {
    success: string;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    deleteGroup200ApplicationJSONObject?: DeleteGroup200ApplicationJSON;
}
