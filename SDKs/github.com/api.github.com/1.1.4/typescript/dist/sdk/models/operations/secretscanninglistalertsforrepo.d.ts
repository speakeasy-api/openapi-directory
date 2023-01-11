import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecretScanningListAlertsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class SecretScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: shared.RepoEnum7;
}
export declare class SecretScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningListAlertsForRepoRequest extends SpeakeasyBase {
    pathParams: SecretScanningListAlertsForRepoPathParams;
    queryParams: SecretScanningListAlertsForRepoQueryParams;
}
export declare class SecretScanningListAlertsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secretScanningAlerts?: shared.SecretScanningAlert[];
    secretScanningListAlertsForRepo503ApplicationJSONObject?: SecretScanningListAlertsForRepo503ApplicationJson;
}
