import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information on the vulnerable package identified by a finding.
 */
export declare class VulnerablePackage extends SpeakeasyBase {
    arch?: string;
    epoch?: number;
    filePath?: string;
    name?: string;
    packageManager?: string;
    release?: string;
    sourceLayerHash?: string;
    version?: string;
}
