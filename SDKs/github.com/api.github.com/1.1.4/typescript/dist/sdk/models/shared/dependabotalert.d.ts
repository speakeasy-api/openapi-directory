import { SpeakeasyBase } from "../../../internal/utils";
import { DependabotAlertPackage } from "./dependabotalertpackage";
import { DependabotAlertSecurityAdvisory } from "./dependabotalertsecurityadvisory";
import { DependabotAlertSecurityVulnerability } from "./dependabotalertsecurityvulnerability";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The execution scope of the vulnerable dependency.
 */
export declare enum DependabotAlertDependencyScopeEnum {
    Development = "development",
    Runtime = "runtime"
}
/**
 * Details for the vulnerable dependency.
 */
export declare class DependabotAlertDependency extends SpeakeasyBase {
    /**
     * The full path to the dependency manifest file, relative to the root of the repository.
     */
    manifestPath?: string;
    /**
     * Details for the vulnerable package.
     */
    package?: DependabotAlertPackage;
    /**
     * The execution scope of the vulnerable dependency.
     */
    scope?: DependabotAlertDependencyScopeEnum;
}
/**
 * The reason that the alert was dismissed.
 */
export declare enum DependabotAlertDismissedReasonEnum {
    FixStarted = "fix_started",
    Inaccurate = "inaccurate",
    NoBandwidth = "no_bandwidth",
    NotUsed = "not_used",
    TolerableRisk = "tolerable_risk"
}
/**
 * The state of the Dependabot alert.
 */
export declare enum DependabotAlertStateEnum {
    Dismissed = "dismissed",
    Fixed = "fixed",
    Open = "open"
}
/**
 * A Dependabot alert.
 */
export declare class DependabotAlert extends SpeakeasyBase {
    /**
     * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    createdAt: Date;
    /**
     * Details for the vulnerable dependency.
     */
    dependency: DependabotAlertDependency;
    /**
     * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    dismissedAt: Date;
    /**
     * A GitHub user.
     */
    dismissedBy: NullableSimpleUser;
    /**
     * An optional comment associated with the alert's dismissal.
     */
    dismissedComment: string;
    /**
     * The reason that the alert was dismissed.
     */
    dismissedReason: DependabotAlertDismissedReasonEnum;
    /**
     * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    fixedAt: Date;
    /**
     * The GitHub URL of the alert resource.
     */
    htmlUrl: string;
    /**
     * The security alert number.
     */
    number: number;
    /**
     * Details for the GitHub Security Advisory.
     */
    securityAdvisory: DependabotAlertSecurityAdvisory;
    /**
     * Details pertaining to one vulnerable version range for the advisory.
     */
    securityVulnerability: DependabotAlertSecurityVulnerability;
    /**
     * The state of the Dependabot alert.
     */
    state: DependabotAlertStateEnum;
    /**
     * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    updatedAt: Date;
    /**
     * The REST API URL of the alert resource.
     */
    url: string;
}
