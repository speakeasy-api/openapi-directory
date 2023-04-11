import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCampaignBatchSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCampaignBatchRequest extends SpeakeasyBase {
    /**
     * A batch instance
     */
    batchInput?: shared.BatchInput;
    /**
     * An id of a batch to update
     */
    id: number;
}
export declare class UpdateCampaignBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
