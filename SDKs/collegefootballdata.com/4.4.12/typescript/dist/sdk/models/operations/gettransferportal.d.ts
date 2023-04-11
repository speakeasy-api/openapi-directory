import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransferPortalRequest extends SpeakeasyBase {
    /**
     * Year filter
     */
    year: number;
}
export declare class GetTransferPortalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    portalPlayers?: shared.PortalPlayer[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
