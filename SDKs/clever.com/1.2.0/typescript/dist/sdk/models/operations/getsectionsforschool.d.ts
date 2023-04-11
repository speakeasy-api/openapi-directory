import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSectionsForSchoolRequest extends SpeakeasyBase {
    endingBefore?: string;
    id: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSectionsForSchoolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    /**
     * OK Response
     */
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
