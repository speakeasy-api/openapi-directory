import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendbatchPostRequest extends SpeakeasyBase {
    accept: string;
    /**
     * Message Body
     */
    bulkSMSRequest: shared.BulkSMSRequest;
    contentType: string;
}
export declare class SendbatchPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
