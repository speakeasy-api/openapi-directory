import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicepacksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    servicepacks?: shared.Servicepack[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
