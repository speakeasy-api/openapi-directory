import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResetRequestBody extends SpeakeasyBase {
    chargestation?: string;
    type?: string;
}
export declare class Reset201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class ResetRequest extends SpeakeasyBase {
    request: ResetRequestBody;
}
export declare class ResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reset201ApplicationJSONObject?: Reset201ApplicationJson;
}
