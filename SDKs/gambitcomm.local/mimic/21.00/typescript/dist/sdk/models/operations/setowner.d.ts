import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetOwnerRequest extends SpeakeasyBase {
    /**
     * Agent to set the owner
     */
    agentNum: number;
    /**
     * Owner of the agent
     */
    owner: string;
}
export declare class SetOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setOwner200ApplicationJSONString?: string;
}
