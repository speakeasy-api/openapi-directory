import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a software package.
 */
export declare class SoftwarePackage extends SpeakeasyBase {
    architecture?: string;
    epoch?: string;
    filePath?: string;
    fixedInVersion?: string;
    name?: string;
    packageManager?: string;
    release?: string;
    remediation?: string;
    sourceLayerArn?: string;
    sourceLayerHash?: string;
    version?: string;
}
