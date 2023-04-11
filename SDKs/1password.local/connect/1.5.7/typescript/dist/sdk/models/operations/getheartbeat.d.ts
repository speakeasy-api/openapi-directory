import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetHeartbeatServerList: readonly ["http://localhost:8080"];
export declare class GetHeartbeatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getHeartbeat200TextPlainString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
