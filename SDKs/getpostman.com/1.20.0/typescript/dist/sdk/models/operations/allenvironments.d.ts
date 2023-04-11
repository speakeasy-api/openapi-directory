import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllEnvironments200ApplicationJSONEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
/**
 * Valid Response
 */
export declare class AllEnvironments200ApplicationJSON extends SpeakeasyBase {
    environments?: AllEnvironments200ApplicationJSONEnvironments[];
}
export declare class AllEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    allEnvironments200ApplicationJSONObject?: AllEnvironments200ApplicationJSON;
}
