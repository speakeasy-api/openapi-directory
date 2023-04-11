import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpGetStatisticsRequest extends SpeakeasyBase {
    /**
     * Agent to show TFTP statistics
     */
    agentNum: number;
}
export declare class ProtocolTftpGetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpGetStatistics200ApplicationJSONInt32Integers?: number[];
}
