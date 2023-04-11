import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1PurchasesIdRequest extends SpeakeasyBase {
    /**
     * Id of Purchase to return.
     */
    id: number;
}
export declare class GetV1PurchasesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    purchaseDto?: shared.PurchaseDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
