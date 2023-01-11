import { AxiosInstance } from "axios";
import { AccountDetailApi } from "./accountdetailapi";
import { Authorization } from "./authorization";
import { AuthorizationApi } from "./authorizationapi";
import { DigiLockerMetaApIs } from "./digilockermetaapis";
import { DigiLockerSignUpApIs } from "./digilockersignupapis";
import { FileApIs } from "./fileapis";
import { TokenRevocationApi } from "./tokenrevocationapi";
export declare const ServerList: readonly ["https://betaapi.digitallocker.gov.in/public"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountDetailAPI: AccountDetailApi;
    authorization: Authorization;
    authorizationAPI: AuthorizationApi;
    digiLockerMetaAPIs: DigiLockerMetaApIs;
    digiLockerSignUpAPIs: DigiLockerSignUpApIs;
    fileAPIs: FileApIs;
    tokenRevocationAPI: TokenRevocationApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
