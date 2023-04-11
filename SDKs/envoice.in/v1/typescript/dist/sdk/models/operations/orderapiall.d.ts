import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiAllRequest extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    listResultOrderDetailsApiModel?: shared.ListResultOrderDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
