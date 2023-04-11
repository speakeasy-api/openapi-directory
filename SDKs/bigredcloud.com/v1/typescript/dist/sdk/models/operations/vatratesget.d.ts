import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VatRatesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultVatRateDto?: shared.PageResultVatRateDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
