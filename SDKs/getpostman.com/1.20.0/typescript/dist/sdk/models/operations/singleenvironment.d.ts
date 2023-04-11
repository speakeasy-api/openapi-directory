import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SingleEnvironmentRequest extends SpeakeasyBase {
    environmentUid: string;
}
export declare class SingleEnvironment200ApplicationJSONEnvironmentValues extends SpeakeasyBase {
    enabled?: boolean;
    hovered?: boolean;
    key?: string;
    type?: string;
    value?: string;
}
export declare class SingleEnvironment200ApplicationJSONEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    values?: SingleEnvironment200ApplicationJSONEnvironmentValues[];
}
/**
 * Valid Response
 */
export declare class SingleEnvironment200ApplicationJSON extends SpeakeasyBase {
    environment?: SingleEnvironment200ApplicationJSONEnvironment;
}
export declare class SingleEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    singleEnvironment200ApplicationJSONObject?: SingleEnvironment200ApplicationJSON;
}
