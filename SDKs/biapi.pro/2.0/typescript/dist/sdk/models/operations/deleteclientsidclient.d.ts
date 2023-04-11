import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteClientsIdClientRequest extends SpeakeasyBase {
    expand?: string;
    idClient: number;
}
export declare class DeleteClientsIdClientResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on Client resource
     */
    client?: shared.Client;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
