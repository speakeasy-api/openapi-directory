import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PublishMockRequest extends SpeakeasyBase {
    mockUid: string;
}
export declare class PublishMock200ApplicationJSONMock extends SpeakeasyBase {
    id?: string;
}
/**
 * Success Response
 */
export declare class PublishMock200ApplicationJSON extends SpeakeasyBase {
    mock?: PublishMock200ApplicationJSONMock;
}
export declare class PublishMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success Response
     */
    publishMock200ApplicationJSONObject?: PublishMock200ApplicationJSON;
}
