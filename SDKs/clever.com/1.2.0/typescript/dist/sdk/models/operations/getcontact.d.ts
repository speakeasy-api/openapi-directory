import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContactRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetContactResponse extends SpeakeasyBase {
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
    studentContactResponse?: shared.StudentContactResponse;
}
