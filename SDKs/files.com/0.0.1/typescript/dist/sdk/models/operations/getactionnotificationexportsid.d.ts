import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActionNotificationExportsIdRequest extends SpeakeasyBase {
    /**
     * Action Notification Export ID.
     */
    id: number;
}
export declare class GetActionNotificationExportsIdResponse extends SpeakeasyBase {
    /**
     * The ActionNotificationExports object.
     */
    actionNotificationExportEntity?: shared.ActionNotificationExportEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
