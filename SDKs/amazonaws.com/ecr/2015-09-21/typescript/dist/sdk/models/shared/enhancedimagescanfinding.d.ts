import { SpeakeasyBase } from "../../../internal/utils";
import { PackageVulnerabilityDetails } from "./packagevulnerabilitydetails";
import { Remediation } from "./remediation";
import { Resource } from "./resource";
import { ScoreDetails } from "./scoredetails";
/**
 * The details of an enhanced image scan. This is returned when enhanced scanning is enabled for your private registry.
 */
export declare class EnhancedImageScanFinding extends SpeakeasyBase {
    awsAccountId?: string;
    description?: string;
    findingArn?: string;
    firstObservedAt?: Date;
    lastObservedAt?: Date;
    packageVulnerabilityDetails?: PackageVulnerabilityDetails;
    remediation?: Remediation;
    resources?: Resource[];
    score?: number;
    scoreDetails?: ScoreDetails;
    severity?: string;
    status?: string;
    title?: string;
    type?: string;
    updatedAt?: Date;
}
