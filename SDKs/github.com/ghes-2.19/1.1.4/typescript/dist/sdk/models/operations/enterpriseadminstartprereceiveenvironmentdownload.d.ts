import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest extends SpeakeasyBase {
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
    resource?: string;
}
/**
 * Client Errors
 */
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON extends SpeakeasyBase {
    errors?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors[];
    message?: string;
}
export declare class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Client Errors
     */
    enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON;
    /**
     * Response
     */
    preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
