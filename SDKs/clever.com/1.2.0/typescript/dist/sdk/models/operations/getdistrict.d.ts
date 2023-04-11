import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictRequest extends SpeakeasyBase {
    id: string;
    include?: string;
}
export declare class GetDistrictResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    districtResponse?: shared.DistrictResponse;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
