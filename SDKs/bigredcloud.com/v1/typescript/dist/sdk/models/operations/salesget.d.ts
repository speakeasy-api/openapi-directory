import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SalesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultSalesQueryDto?: shared.PageResultSalesQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
