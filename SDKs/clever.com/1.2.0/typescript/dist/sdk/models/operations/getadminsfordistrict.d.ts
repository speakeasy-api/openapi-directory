import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdminsForDistrictRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetAdminsForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    districtAdminsResponse?: shared.DistrictAdminsResponse;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
