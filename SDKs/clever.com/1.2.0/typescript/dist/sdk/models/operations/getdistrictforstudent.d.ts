import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistrictForStudentRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictForStudentResponse extends SpeakeasyBase {
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
