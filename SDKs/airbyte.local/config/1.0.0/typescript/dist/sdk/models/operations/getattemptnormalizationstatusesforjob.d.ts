import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAttemptNormalizationStatusesForJobResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    attemptNormalizationStatusReadList?: shared.AttemptNormalizationStatusReadList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
