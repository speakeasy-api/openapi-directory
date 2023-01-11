import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnlockconnectorRequestBody extends SpeakeasyBase {
    chargestation?: string;
    connector?: string;
}
export declare class Unlockconnector201ApplicationJson extends SpeakeasyBase {
    command?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class UnlockconnectorRequest extends SpeakeasyBase {
    request: UnlockconnectorRequestBody;
}
export declare class UnlockconnectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unlockconnector201ApplicationJSONObject?: Unlockconnector201ApplicationJson;
}
