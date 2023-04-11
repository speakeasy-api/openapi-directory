import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendEthereumRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    sendEthereumRequest: shared.SendEthereumRequest;
}
export declare class SendEthereumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    sendEthereum?: shared.SendEthereum;
}
