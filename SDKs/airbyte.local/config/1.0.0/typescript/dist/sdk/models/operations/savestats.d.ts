import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveStatsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    internalOperationResult?: shared.InternalOperationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
