import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveCompanyInfoResponse extends SpeakeasyBase {
    /**
     * Bad request or invalid VATNumber.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
