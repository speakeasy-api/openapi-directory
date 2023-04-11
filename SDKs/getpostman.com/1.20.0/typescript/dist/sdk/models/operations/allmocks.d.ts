import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllMocks200ApplicationJSONMocks extends SpeakeasyBase {
    collection?: string;
    environment?: string;
    id?: string;
    mockUrl?: string;
    owner?: string;
    uid?: string;
}
/**
 * Successful Response
 */
export declare class AllMocks200ApplicationJSON extends SpeakeasyBase {
    mocks?: AllMocks200ApplicationJSONMocks[];
}
export declare class AllMocksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    allMocks200ApplicationJSONObject?: AllMocks200ApplicationJSON;
}
