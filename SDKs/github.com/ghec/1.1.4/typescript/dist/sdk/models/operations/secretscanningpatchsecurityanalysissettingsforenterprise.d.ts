import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * Whether GitHub Advanced Security is automatically enabled for new repositories. For more information, see "[About GitHub Advanced Security](https://docs.github.com/enterprise-cloud@latest//get-started/learning-about-github/about-github-advanced-security)."
     */
    advancedSecurityEnabledForNewRepositories?: boolean;
    /**
     * Whether Dependabot alerts are automatically enabled for new repositories. For more information, see "[About Dependabot alerts](https://docs.github.com/enterprise-cloud@latest//code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
     */
    dependabotAlertsEnabledForNewRepositories?: boolean;
    /**
     * Whether secret scanning is automatically enabled for new repositories. For more information, see "[About secret scanning](https://docs.github.com/enterprise-cloud@latest//code-security/secret-scanning/about-secret-scanning)."
     */
    secretScanningEnabledForNewRepositories?: boolean;
    /**
     * The URL that will be displayed to contributors who are blocked from pushing a secret. For more information, see "[Protecting pushes with secret scanning](https://docs.github.com/enterprise-cloud@latest//code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
     *
     * @remarks
     * To disable this functionality, set this field to `null`.
     */
    secretScanningPushProtectionCustomLink?: string;
    /**
     * Whether secret scanning push protection is automatically enabled for new repositories. For more information, see "[Protecting pushes with secret scanning](https://docs.github.com/enterprise-cloud@latest//code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
     */
    secretScanningPushProtectionEnabledForNewRepositories?: boolean;
}
export declare class SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequest extends SpeakeasyBase {
    requestBody?: SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class SecretScanningPatchSecurityAnalysisSettingsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
