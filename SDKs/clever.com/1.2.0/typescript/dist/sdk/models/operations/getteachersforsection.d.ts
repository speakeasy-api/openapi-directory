import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeachersForSectionRequest extends SpeakeasyBase {
    endingBefore?: string;
    id: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetTeachersForSectionResponse extends SpeakeasyBase {
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
    teachersResponse?: shared.TeachersResponse;
}
