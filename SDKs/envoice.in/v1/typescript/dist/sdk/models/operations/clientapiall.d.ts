import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiAllRequest extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientDetailsApiModels?: shared.ClientDetailsApiModel[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
