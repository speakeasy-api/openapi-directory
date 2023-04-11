import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPrivilegesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sellingPrivileges?: shared.SellingPrivileges;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
