import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuppliersGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultSupplierQueryDto?: shared.PageResultSupplierQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
