import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchoolsForDistrictRequest extends SpeakeasyBase {
    endingBefore?: string;
    id: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSchoolsForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    /**
     * OK Response
     */
    schoolsResponse?: shared.SchoolsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
