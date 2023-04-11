import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictStatusRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    districtStatusResponses?: shared.DistrictStatusResponses;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
