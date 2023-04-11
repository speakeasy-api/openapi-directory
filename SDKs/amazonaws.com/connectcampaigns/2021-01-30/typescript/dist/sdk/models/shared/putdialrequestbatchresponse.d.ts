import { SpeakeasyBase } from "../../../internal/utils";
import { FailedRequest } from "./failedrequest";
import { SuccessfulRequest } from "./successfulrequest";
/**
 * PutDialRequestBatchResponse
 */
export declare class PutDialRequestBatchResponse extends SpeakeasyBase {
    /**
     * A list of failed requests.
     */
    failedRequests?: FailedRequest[];
    /**
     * A list of successful requests identified by the unique client token.
     */
    successfulRequests?: SuccessfulRequest[];
}
