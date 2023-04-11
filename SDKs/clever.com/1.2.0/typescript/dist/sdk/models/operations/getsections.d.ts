import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSectionsRequest extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK Response
     */
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
