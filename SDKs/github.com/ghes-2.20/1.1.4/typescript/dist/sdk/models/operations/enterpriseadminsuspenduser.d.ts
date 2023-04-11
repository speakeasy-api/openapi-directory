import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSuspendUserRequestBody extends SpeakeasyBase {
    /**
     * The reason the user is being suspended. This message will be logged in the [audit log](https://help.github.com/enterprise/admin/articles/audit-logging/). If you don't provide a `reason`, it will default to "Suspended via API by _SITE\_ADMINISTRATOR_", where _SITE\_ADMINISTRATOR_ is the person who performed the action.
     */
    reason?: string;
}
export declare class EnterpriseAdminSuspendUserRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminSuspendUserRequestBody;
    username: string;
}
export declare class EnterpriseAdminSuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
