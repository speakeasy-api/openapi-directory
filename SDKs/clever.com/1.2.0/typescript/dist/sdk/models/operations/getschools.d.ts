import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchoolsRequest extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSchoolsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    schoolsResponse?: shared.SchoolsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
