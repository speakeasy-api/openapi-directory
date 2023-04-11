import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnpublishMockRequest extends SpeakeasyBase {
    mockUid: string;
}
export declare class UnpublishMock200ApplicationJSONMock extends SpeakeasyBase {
    id?: string;
}
/**
 * Success Response
 */
export declare class UnpublishMock200ApplicationJSON extends SpeakeasyBase {
    mock?: UnpublishMock200ApplicationJSONMock;
}
export declare class UnpublishMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success Response
     */
    unpublishMock200ApplicationJSONObject?: UnpublishMock200ApplicationJSON;
}
