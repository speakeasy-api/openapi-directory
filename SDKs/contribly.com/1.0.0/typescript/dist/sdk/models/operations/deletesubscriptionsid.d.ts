import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSubscriptionsIdRequest extends SpeakeasyBase {
    /**
     * Id of the subscription to delete
     */
    id: string;
}
export declare class DeleteSubscriptionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
