import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendClientsMessageUsingGetQueryParams extends SpeakeasyBase {
    msg?: string;
    padID?: string;
}
export declare class SendClientsMessageUsingGet200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGet400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGet401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGet500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingGetRequest extends SpeakeasyBase {
    queryParams: SendClientsMessageUsingGetQueryParams;
}
export declare class SendClientsMessageUsingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendClientsMessageUsingGET200ApplicationJSONObject?: SendClientsMessageUsingGet200ApplicationJson;
    sendClientsMessageUsingGET400ApplicationJSONObject?: SendClientsMessageUsingGet400ApplicationJson;
    sendClientsMessageUsingGET401ApplicationJSONObject?: SendClientsMessageUsingGet401ApplicationJson;
    sendClientsMessageUsingGET500ApplicationJSONObject?: SendClientsMessageUsingGet500ApplicationJson;
}
