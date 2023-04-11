import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSectionRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetSectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Entity Not Found
     */
    notFound?: shared.NotFound;
    /**
     * OK Response
     */
    sectionResponse?: shared.SectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
