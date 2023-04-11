import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserConnectionsIdConnectionRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserConnectionsIdConnectionResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on Connection resource
     */
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
