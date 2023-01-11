import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendClientsMessageUsingPostQueryParams extends SpeakeasyBase {
    msg?: string;
    padID?: string;
}
export declare class SendClientsMessageUsingPost200ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPost400ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPost401ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPost500ApplicationJson extends SpeakeasyBase {
    code?: number;
    data?: Record<string, any>;
    message?: string;
}
export declare class SendClientsMessageUsingPostRequest extends SpeakeasyBase {
    queryParams: SendClientsMessageUsingPostQueryParams;
}
export declare class SendClientsMessageUsingPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendClientsMessageUsingPOST200ApplicationJSONObject?: SendClientsMessageUsingPost200ApplicationJson;
    sendClientsMessageUsingPOST400ApplicationJSONObject?: SendClientsMessageUsingPost400ApplicationJson;
    sendClientsMessageUsingPOST401ApplicationJSONObject?: SendClientsMessageUsingPost401ApplicationJson;
    sendClientsMessageUsingPOST500ApplicationJSONObject?: SendClientsMessageUsingPost500ApplicationJson;
}
