import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VatAnalysisTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultVatAnalysisTypeDto?: shared.PageResultVatAnalysisTypeDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
