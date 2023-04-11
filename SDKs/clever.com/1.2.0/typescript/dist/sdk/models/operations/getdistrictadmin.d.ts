import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictAdminRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictAdminResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    districtAdminResponse?: shared.DistrictAdminResponse;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
