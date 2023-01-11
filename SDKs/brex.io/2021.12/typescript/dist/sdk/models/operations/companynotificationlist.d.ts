import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyNotificationListSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyNotificationListRequest extends SpeakeasyBase {
    security: CompanyNotificationListSecurity;
}
export declare class CompanyNotificationListResponse extends SpeakeasyBase {
    companyNotificationList200ApplicationJSONAnies?: any[];
    companyNotificationListDefaultApplicationJSONAny?: any;
    contentType: string;
    statusCode: number;
}
