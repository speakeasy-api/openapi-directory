import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMockRequest extends SpeakeasyBase {
    mockUid: string;
}
export declare class DeleteMock200ApplicationJSONMock extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
/**
 * Successful Response
 */
export declare class DeleteMock200ApplicationJSON extends SpeakeasyBase {
    mock?: DeleteMock200ApplicationJSONMock;
}
export declare class DeleteMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    deleteMock200ApplicationJSONObject?: DeleteMock200ApplicationJSON;
}
