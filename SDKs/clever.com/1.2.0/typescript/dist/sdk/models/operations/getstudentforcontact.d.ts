import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStudentForContactRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentForContactResponse extends SpeakeasyBase {
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
    studentResponse?: shared.StudentResponse;
}
