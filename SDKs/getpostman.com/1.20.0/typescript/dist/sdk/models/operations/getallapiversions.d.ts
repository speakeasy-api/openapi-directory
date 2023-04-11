import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAllApiVersionsRequest extends SpeakeasyBase {
    apiId: string;
}
export declare class GetAllApiVersions200ApplicationJSONVersions extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
/**
 * Get All API versions
 */
export declare class GetAllApiVersions200ApplicationJSON extends SpeakeasyBase {
    versions?: GetAllApiVersions200ApplicationJSONVersions[];
}
export declare class GetAllApiVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get All API versions
     */
    getAllApiVersions200ApplicationJSONObject?: GetAllApiVersions200ApplicationJSON;
}
