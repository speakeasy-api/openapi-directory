import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchoolRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    /**
     * OK Response
     */
    schoolResponse?: shared.SchoolResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
