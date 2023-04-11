import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    districtsResponse?: shared.DistrictsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
