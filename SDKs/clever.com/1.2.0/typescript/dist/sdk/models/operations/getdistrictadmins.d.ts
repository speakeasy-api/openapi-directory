import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictAdminsRequest extends SpeakeasyBase {
    endingBefore?: string;
    showLinks?: string;
    startingAfter?: string;
}
export declare class GetDistrictAdminsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    districtAdminsResponse?: shared.DistrictAdminsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
