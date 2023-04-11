import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiDetailsRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientDetailsApiModel?: shared.ClientDetailsApiModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
