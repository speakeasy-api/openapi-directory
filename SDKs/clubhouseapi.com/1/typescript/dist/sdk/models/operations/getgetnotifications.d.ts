import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGetNotificationsRequest extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetGetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
