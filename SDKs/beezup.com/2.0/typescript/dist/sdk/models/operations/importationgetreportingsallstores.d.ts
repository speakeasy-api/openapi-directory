import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetReportingsAllStoresResponse extends SpeakeasyBase {
    /**
     * UserId not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The last importation reportings
     */
    importationsPerStoreResponse?: Record<string, shared.ImportationsResponse>;
}
