import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DependencyGraphDiffChangeTypeEnum {
    Added = "added",
    Removed = "removed"
}
/**
 * Where the dependency is utilized. `development` means that the dependency is only utilized in the development environment. `runtime` means that the dependency is utilized at runtime and in the development environment.
 */
export declare enum DependencyGraphDiffScopeEnum {
    Unknown = "unknown",
    Runtime = "runtime",
    Development = "development"
}
export declare class DependencyGraphDiffVulnerabilities extends SpeakeasyBase {
    advisoryGhsaId: string;
    advisorySummary: string;
    advisoryUrl: string;
    severity: string;
}
export declare class DependencyGraphDiff extends SpeakeasyBase {
    changeType: DependencyGraphDiffChangeTypeEnum;
    ecosystem: string;
    license: string;
    manifest: string;
    name: string;
    packageUrl: string;
    /**
     * Where the dependency is utilized. `development` means that the dependency is only utilized in the development environment. `runtime` means that the dependency is utilized at runtime and in the development environment.
     */
    scope: DependencyGraphDiffScopeEnum;
    sourceRepositoryUrl: string;
    version: string;
    vulnerabilities: DependencyGraphDiffVulnerabilities[];
}
