import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBatchesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    arrayOfBatch?: shared.ArrayOfBatch;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
