import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetInterfaceRequest extends SpeakeasyBase {
    /**
     * Agent to set the primary interface
     */
    agentNum: number;
    /**
     * Primary interface of the agent
     */
    interface: string;
}
export declare class SetInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setInterface200ApplicationJSONString?: string;
}
