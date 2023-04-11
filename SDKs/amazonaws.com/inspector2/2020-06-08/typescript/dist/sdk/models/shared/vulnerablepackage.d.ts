import { SpeakeasyBase } from "../../../internal/utils";
import { PackageManagerEnum } from "./packagemanagerenum";
/**
 * Information on the vulnerable package identified by a finding.
 */
export declare class VulnerablePackage extends SpeakeasyBase {
    arch?: string;
    epoch?: number;
    filePath?: string;
    fixedInVersion?: string;
    name: string;
    packageManager?: PackageManagerEnum;
    release?: string;
    remediation?: string;
    sourceLambdaLayerArn?: string;
    sourceLayerHash?: string;
    version: string;
}
