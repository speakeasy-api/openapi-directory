import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WriteDiscoverCatalogResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    discoverCatalogResult?: shared.DiscoverCatalogResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
