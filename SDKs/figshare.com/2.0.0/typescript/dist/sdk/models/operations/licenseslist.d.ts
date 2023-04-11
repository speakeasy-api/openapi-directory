import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicensesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. An array of licenses
     */
    licenses?: shared.License[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
