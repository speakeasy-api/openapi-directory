import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactsForStudentRequest extends SpeakeasyBase {
    id: string;
    limit?: number;
}
export declare class GetContactsForStudentResponse extends SpeakeasyBase {
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
    studentContactsForStudentResponse?: shared.StudentContactsForStudentResponse;
}
