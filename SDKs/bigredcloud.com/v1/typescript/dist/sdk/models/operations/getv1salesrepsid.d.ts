import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1SalesRepsIdRequest extends SpeakeasyBase {
    /**
     * Id of Sale Rep to return.
     */
    id: number;
}
export declare class GetV1SalesRepsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    saleRepsDto?: shared.SaleRepsDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
