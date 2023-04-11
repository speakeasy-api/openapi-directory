import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOptedInProgramsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    programs?: shared.Programs;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
