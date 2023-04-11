import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActivityMarkThreadAsReadRequest extends SpeakeasyBase {
    /**
     * thread_id parameter
     */
    threadId: number;
}
export declare class ActivityMarkThreadAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
