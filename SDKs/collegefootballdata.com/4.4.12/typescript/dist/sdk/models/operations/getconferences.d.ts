import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConferencesResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    conferences?: shared.Conference[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
