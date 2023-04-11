import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainsUpdatesListRequest extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey?: string;
}
export declare class GetDomainsUpdatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateModel?: shared.UpdateModel;
}
