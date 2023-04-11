import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStudentsForSchoolRequest extends SpeakeasyBase {
    endingBefore?: string;
    id: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetStudentsForSchoolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK Response
     */
    studentsResponse?: shared.StudentsResponse;
}
