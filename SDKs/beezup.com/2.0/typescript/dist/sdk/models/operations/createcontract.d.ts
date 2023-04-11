import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateContractResponse extends SpeakeasyBase {
    /**
     * Bad request. (Invalid billing period, invalid offer, etc.)
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * New contract has been created. Some warnings can be present in response.
     */
    createContractResponse?: shared.CreateContractResponse;
}
