import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCalendarRequest extends SpeakeasyBase {
    /**
     * Year filter
     */
    year: number;
}
export declare class GetCalendarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    weeks?: shared.Week[];
}
