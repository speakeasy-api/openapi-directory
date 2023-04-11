import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRequestsIdRequest extends SpeakeasyBase {
    /**
     * Request ID.
     */
    id: number;
}
export declare class DeleteRequestsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
