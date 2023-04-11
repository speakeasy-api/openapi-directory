import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveStoreAlertsRequest extends SpeakeasyBase {
    requestBody: Record<string, shared.SaveStoreAlertRequest>;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class SaveStoreAlertsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
