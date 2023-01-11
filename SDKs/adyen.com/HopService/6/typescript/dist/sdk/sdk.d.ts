import { AxiosInstance } from "axios";
import { HostedOnboardingPage } from "./hostedonboardingpage";
import { PciComplianceQuestionnairePage } from "./pcicompliancequestionnairepage";
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Hop/v6"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    hostedOnboardingPage: HostedOnboardingPage;
    pciComplianceQuestionnairePage: PciComplianceQuestionnairePage;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
