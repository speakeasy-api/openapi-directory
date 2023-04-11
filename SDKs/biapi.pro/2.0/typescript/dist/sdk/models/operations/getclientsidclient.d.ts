import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClientsIdClientRequest extends SpeakeasyBase {
    expand?: string;
    idClient: number;
}
export declare class GetClientsIdClientResponse extends SpeakeasyBase {
    /**
     * Successful GET on Client resource
     */
    client?: shared.Client;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
