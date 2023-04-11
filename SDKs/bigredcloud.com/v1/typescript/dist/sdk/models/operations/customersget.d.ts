import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomersGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultCustomerQueryDto?: shared.PageResultCustomerQueryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
