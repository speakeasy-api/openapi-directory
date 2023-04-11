import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportationGetManualUpdateLastInputConfigRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ImportationGetManualUpdateLastInputConfigResponse extends SpeakeasyBase {
    /**
     * StoreId or Manual Update last configuration not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    lastManualImportInputConfiguration?: shared.LastManualImportInputConfiguration;
}
