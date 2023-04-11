import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteClientsIdClientLogoRequest extends SpeakeasyBase {
    expand?: string;
    idClient: number;
}
export declare class DeleteClientsIdClientLogoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful DELETE on File resource
     */
    file?: shared.File;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
