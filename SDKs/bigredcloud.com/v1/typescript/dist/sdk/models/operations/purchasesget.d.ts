import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PurchasesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultPurchaseQueryDto?: shared.PageResultPurchaseQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
