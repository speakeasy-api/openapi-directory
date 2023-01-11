import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Firmware {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * firmwareAccountsFirmwareFirmwareHashAccountsGet - Get default accounts and password hashes of a firmware
    **/
    firmwareAccountsFirmwareFirmwareHashAccountsGet(req: operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse>;
    /**
     * firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet - Get default OS configuration issues of a device firmware
    **/
    firmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGet(req: operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse>;
    /**
     * firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet - Get expired digital certificates embedded in a device firmware
    **/
    firmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGet(req: operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse>;
    /**
     * firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet - Get private crypto keys embedded in a device firmware
    **/
    firmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGet(req: operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse>;
    /**
     * firmwareRiskFirmwareFirmwareHashRiskGet - Get iot device firmware risk analysis
    **/
    firmwareRiskFirmwareFirmwareHashRiskGet(req: operations.FirmwareRiskFirmwareFirmwareHashRiskGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareRiskFirmwareFirmwareHashRiskGetResponse>;
    /**
     * firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
    **/
    firmwareWeakCertsFirmwareFirmwareHashWeakCertsGet(req: operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse>;
    /**
     * firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet - Get weak crypto keys with short length
    **/
    firmwareWeakKeysFirmwareFirmwareHashWeakKeysGet(req: operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse>;
}
