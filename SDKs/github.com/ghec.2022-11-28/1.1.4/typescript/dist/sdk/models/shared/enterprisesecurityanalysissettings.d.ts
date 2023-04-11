import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class EnterpriseSecurityAnalysisSettings extends SpeakeasyBase {
    /**
     * Whether GitHub advanced security is automatically enabled for new repositories and repositories transferred to
     *
     * @remarks
     * this enterprise.
     */
    advancedSecurityEnabledForNewRepositories: boolean;
    /**
     * Whether Dependabot alerts are automatically enabled for new repositories and repositories transferred to this
     *
     * @remarks
     * enterprise.
     */
    dependabotAlertsEnabledForNewRepositories: boolean;
    /**
     * Whether secret scanning is automatically enabled for new repositories and repositories transferred to this
     *
     * @remarks
     * enterprise.
     */
    secretScanningEnabledForNewRepositories: boolean;
    /**
     * An optional URL string to display to contributors who are blocked from pushing a secret.
     */
    secretScanningPushProtectionCustomLink?: string;
    /**
     * Whether secret scanning push protection is automatically enabled for new repositories and repositories
     *
     * @remarks
     * transferred to this enterprise.
     */
    secretScanningPushProtectionEnabledForNewRepositories: boolean;
}
