import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationRequest extends SpeakeasyBase {
    username: string;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An Organization
     */
    getOrganization200ApplicationJSONObject?: Record<string, any>;
}
