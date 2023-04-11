import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1SuppliersIdRequest extends SpeakeasyBase {
    /**
     * Id of Supplier to return.
     */
    id: number;
    /**
     * If "true" then Supplier's ledger balance will be calculated; otherwise balance will be returned as 0.
     */
    needBalance?: boolean;
}
export declare class GetV1SuppliersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    supplierDto?: shared.SupplierDto;
}
