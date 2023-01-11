import { SpeakeasyBase } from "../../../internal/utils";
export declare const GetHeartbeatServerList: readonly ["http://localhost:8080"];
export declare class GetHeartbeatRequest extends SpeakeasyBase {
    serverURL?: string;
}
export declare class GetHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    getHeartbeat200TextPlainString?: string;
    statusCode: number;
}
