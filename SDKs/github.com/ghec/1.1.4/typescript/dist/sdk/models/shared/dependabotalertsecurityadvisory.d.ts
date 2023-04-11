import { SpeakeasyBase } from "../../../internal/utils";
import { DependabotAlertSecurityVulnerability } from "./dependabotalertsecurityvulnerability";
/**
 * Details for the advisory pertaining to the Common Vulnerability Scoring System.
 */
export declare class DependabotAlertSecurityAdvisoryCvss extends SpeakeasyBase {
    /**
     * The overall CVSS score of the advisory.
     */
    score: number;
    /**
     * The full CVSS vector string for the advisory.
     */
    vectorString: string;
}
/**
 * A CWE weakness assigned to the advisory.
 */
export declare class DependabotAlertSecurityAdvisoryCwes extends SpeakeasyBase {
    /**
     * The unique CWE ID.
     */
    cweId: string;
    /**
     * The short, plain text name of the CWE.
     */
    name: string;
}
/**
 * The type of advisory identifier.
 */
export declare enum DependabotAlertSecurityAdvisoryIdentifiersTypeEnum {
    Cve = "CVE",
    Ghsa = "GHSA"
}
/**
 * An advisory identifier.
 */
export declare class DependabotAlertSecurityAdvisoryIdentifiers extends SpeakeasyBase {
    /**
     * The type of advisory identifier.
     */
    type: DependabotAlertSecurityAdvisoryIdentifiersTypeEnum;
    /**
     * The value of the advisory identifer.
     */
    value: string;
}
/**
 * A link to additional advisory information.
 */
export declare class DependabotAlertSecurityAdvisoryReferences extends SpeakeasyBase {
    /**
     * The URL of the reference.
     */
    url: string;
}
/**
 * The severity of the advisory.
 */
export declare enum DependabotAlertSecurityAdvisorySeverityEnum {
    Low = "low",
    Medium = "medium",
    High = "high",
    Critical = "critical"
}
/**
 * Details for the GitHub Security Advisory.
 */
export declare class DependabotAlertSecurityAdvisory extends SpeakeasyBase {
    /**
     * The unique CVE ID assigned to the advisory.
     */
    cveId: string;
    /**
     * Details for the advisory pertaining to the Common Vulnerability Scoring System.
     */
    cvss: DependabotAlertSecurityAdvisoryCvss;
    /**
     * Details for the advisory pertaining to Common Weakness Enumeration.
     */
    cwes: DependabotAlertSecurityAdvisoryCwes[];
    /**
     * A long-form Markdown-supported description of the advisory.
     */
    description: string;
    /**
     * The unique GitHub Security Advisory ID assigned to the advisory.
     */
    ghsaId: string;
    /**
     * Values that identify this advisory among security information sources.
     */
    identifiers: DependabotAlertSecurityAdvisoryIdentifiers[];
    /**
     * The time that the advisory was published in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    publishedAt: Date;
    /**
     * Links to additional advisory information.
     */
    references: DependabotAlertSecurityAdvisoryReferences[];
    /**
     * The severity of the advisory.
     */
    severity: DependabotAlertSecurityAdvisorySeverityEnum;
    /**
     * A short, plain text summary of the advisory.
     */
    summary: string;
    /**
     * The time that the advisory was last modified in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    updatedAt: Date;
    /**
     * Vulnerable version range information for the advisory.
     */
    vulnerabilities: DependabotAlertSecurityVulnerability[];
    /**
     * The time that the advisory was withdrawn in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    withdrawnAt: Date;
}
