import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostClientsIdClientLogoRequest extends SpeakeasyBase {
    expand?: string;
    idClient: number;
}
export declare class PostClientsIdClientLogoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful POST on File resource
     */
    file?: shared.File;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
