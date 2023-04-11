import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetLicenseSyncStatusRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class EnterpriseAdminGetLicenseSyncStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * License Sync Status Response
     */
    getLicenseSyncStatus?: shared.GetLicenseSyncStatus;
}
