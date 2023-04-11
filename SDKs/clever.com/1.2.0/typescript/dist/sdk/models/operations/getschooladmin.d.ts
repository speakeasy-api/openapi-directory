import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchoolAdminRequest extends SpeakeasyBase {
    id: string;
    include?: string;
}
export declare class GetSchoolAdminResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    /**
     * OK Response
     */
    schoolAdminResponse?: shared.SchoolAdminResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
