import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBundleNotificationsIdRequest extends SpeakeasyBase {
    /**
     * Bundle Notification ID.
     */
    id: number;
}
export declare class DeleteBundleNotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
