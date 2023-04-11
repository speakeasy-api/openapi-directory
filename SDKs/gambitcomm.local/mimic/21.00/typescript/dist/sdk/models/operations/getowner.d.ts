import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOwnerRequest extends SpeakeasyBase {
    /**
     * Agent to return the owner
     */
    agentNum: number;
}
export declare class GetOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getOwner200ApplicationJSONString?: string;
}
