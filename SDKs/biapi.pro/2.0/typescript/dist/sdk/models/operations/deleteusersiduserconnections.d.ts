import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserConnectionsRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserConnectionsResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on Connection resource
     */
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
