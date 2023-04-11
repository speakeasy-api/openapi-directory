import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SingleMockRequest extends SpeakeasyBase {
    mockUid: string;
}
export declare class SingleMock200ApplicationJSONMock extends SpeakeasyBase {
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
export declare class SingleMock200ApplicationJSON extends SpeakeasyBase {
    mock?: SingleMock200ApplicationJSONMock;
}
export declare class SingleMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    singleMock200ApplicationJSONObject?: SingleMock200ApplicationJSON;
}
