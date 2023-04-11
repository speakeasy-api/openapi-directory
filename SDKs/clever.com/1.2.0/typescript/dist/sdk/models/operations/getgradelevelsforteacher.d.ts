import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGradeLevelsForTeacherRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetGradeLevelsForTeacherResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    gradeLevelsResponse?: shared.GradeLevelsResponse;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
