import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchoolAdminsRequest extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSchoolAdminsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    schoolAdminsResponse?: shared.SchoolAdminsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
