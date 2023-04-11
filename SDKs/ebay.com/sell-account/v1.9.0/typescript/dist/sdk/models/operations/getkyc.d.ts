import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKYCResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    kycResponse?: shared.KycResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
