import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessDelRequest extends SpeakeasyBase {
    /**
     * username of the simulator hosting system
     */
    user: string;
}
export declare class AccessDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    accessDel200ApplicationJSONString?: string;
}
