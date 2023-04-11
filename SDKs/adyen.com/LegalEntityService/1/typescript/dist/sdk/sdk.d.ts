import { BusinessLines } from "./businesslines";
import { Documents } from "./documents";
import { HostedOnboarding } from "./hostedonboarding";
import { LegalEntities } from "./legalentities";
import { TermsOfService } from "./termsofservice";
import { TransferInstruments } from "./transferinstruments";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://kyc-test.adyen.com/lem/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Legal Entity Management API enables you to manage legal entities that contain information required for verification.
 *
 * @remarks
 * ## Authentication
 * To connect to the Legal Entity Management API, you must use the basic authentication credentials of your web service user. If you don't have one, contact the [Adyen Support Team](https://www.adyen.help/hc/en-us/requests/new). Use the web service user credentials to authenticate your request, for example:
 *
 * ```
 * curl
 * -U "ws_123456@Scope.BalancePlatform_YourBalancePlatform":"YourWsPassword" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Legal Entity Management API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://kyc-test.adyen.com/lem/v1/legalEntities
 * ```
 * ## Going live
 * When going live, your Adyen contact will provide your API credential for the live environment. You can then use the username and password to send requests to `https://kyc-live.adyen.com/lem/v1`.
 *
 *
 */
export declare class SDK {
    businessLines: BusinessLines;
    documents: Documents;
    hostedOnboarding: HostedOnboarding;
    legalEntities: LegalEntities;
    termsOfService: TermsOfService;
    transferInstruments: TransferInstruments;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
