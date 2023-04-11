import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateMockRequestBodyMock extends SpeakeasyBase {
    description?: string;
    environment?: string;
    name?: string;
    private?: boolean;
    versionTag?: string;
}
export declare class UpdateMockRequestBody extends SpeakeasyBase {
    mock?: UpdateMockRequestBodyMock;
}
export declare class UpdateMockRequest extends SpeakeasyBase {
    requestBody?: UpdateMockRequestBody;
    mockUid: string;
}
export declare class UpdateMock200ApplicationJSONMockConfig extends SpeakeasyBase {
    headers?: any[];
    matchBody?: boolean;
    matchQueryParams?: boolean;
    matchWildcards?: boolean;
}
export declare class UpdateMock200ApplicationJSONMock extends SpeakeasyBase {
    collection?: string;
    config?: UpdateMock200ApplicationJSONMockConfig;
    environment?: string;
    id?: string;
    mockUrl?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
/**
 * success Response
 */
export declare class UpdateMock200ApplicationJSON extends SpeakeasyBase {
    mock?: UpdateMock200ApplicationJSONMock;
}
export declare class UpdateMockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success Response
     */
    updateMock200ApplicationJSONObject?: UpdateMock200ApplicationJSON;
}
