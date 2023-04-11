import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolCoapGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the COAP configuration
     */
    agentNum: number;
}
export declare class ProtocolCoapGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configCOAP?: shared.ConfigCOAP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
