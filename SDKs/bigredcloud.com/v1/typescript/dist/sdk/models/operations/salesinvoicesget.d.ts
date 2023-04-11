import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesInvoicesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultSalesInvoiceQueryDto?: shared.PageResultSalesInvoiceQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
