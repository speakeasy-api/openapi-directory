import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchConnectorPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchConnectorRequestBody extends SpeakeasyBase {
    chargestation?: string;
    format?: string;
    power?: number;
    powerType?: string;
    rate?: string;
    type?: string;
}
export declare class PatchConnector201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PatchConnectorRequest extends SpeakeasyBase {
    pathParams: PatchConnectorPathParams;
    request: PatchConnectorRequestBody;
}
export declare class PatchConnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchConnector201ApplicationJSONObject?: PatchConnector201ApplicationJson;
}
