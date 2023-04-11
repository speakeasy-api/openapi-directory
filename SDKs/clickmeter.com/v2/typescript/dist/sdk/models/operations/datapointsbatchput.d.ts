import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataPointsBatchPutResponse extends SpeakeasyBase {
    apiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64?: shared.ApiCoreResponsesModifyBatchItemResponceApiCoreDtoDatapointsDatapointSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
