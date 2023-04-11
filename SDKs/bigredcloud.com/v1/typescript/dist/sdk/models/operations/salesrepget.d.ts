import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesRepGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultSaleRepsDto?: shared.PageResultSaleRepsDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
