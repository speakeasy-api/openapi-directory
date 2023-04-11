import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateMockRequestBodyMock extends SpeakeasyBase {
    collection?: string;
    environment?: string;
}
export declare class CreateMockRequestBody extends SpeakeasyBase {
    mock?: CreateMockRequestBodyMock;
}
export declare class CreateMock200ApplicationJSONMock extends SpeakeasyBase {
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
export declare class CreateMock200ApplicationJSON extends SpeakeasyBase {
    mock?: CreateMock200ApplicationJSONMock;
}
export declare class CreateMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    createMock200ApplicationJSONObject?: CreateMock200ApplicationJSON;
}
