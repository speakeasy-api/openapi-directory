import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteConnectionsIdConnectionSourcesIdSourceRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    idSource: number;
}
export declare class DeleteConnectionsIdConnectionSourcesIdSourceResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on ConnectionSource resource
     */
    connectionSource?: shared.ConnectionSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
