import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VatTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultVatTypeDto?: shared.PageResultVatTypeDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
