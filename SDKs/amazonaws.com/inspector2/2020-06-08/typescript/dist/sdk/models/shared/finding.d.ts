import { SpeakeasyBase } from "../../../internal/utils";
import { ExploitabilityDetails } from "./exploitabilitydetails";
import { ExploitAvailableEnum } from "./exploitavailableenum";
import { FindingStatusEnum } from "./findingstatusenum";
import { FindingTypeEnum } from "./findingtypeenum";
import { FixAvailableEnum } from "./fixavailableenum";
import { InspectorScoreDetails } from "./inspectorscoredetails";
import { NetworkReachabilityDetails } from "./networkreachabilitydetails";
import { PackageVulnerabilityDetails } from "./packagevulnerabilitydetails";
import { Remediation } from "./remediation";
import { Resource } from "./resource";
import { SeverityEnum } from "./severityenum";
/**
 * Details about an Amazon Inspector finding.
 */
export declare class Finding extends SpeakeasyBase {
    awsAccountId: string;
    description: string;
    exploitAvailable?: ExploitAvailableEnum;
    exploitabilityDetails?: ExploitabilityDetails;
    findingArn: string;
    firstObservedAt: Date;
    fixAvailable?: FixAvailableEnum;
    inspectorScore?: number;
    inspectorScoreDetails?: InspectorScoreDetails;
    lastObservedAt: Date;
    networkReachabilityDetails?: NetworkReachabilityDetails;
    packageVulnerabilityDetails?: PackageVulnerabilityDetails;
    remediation: Remediation;
    resources: Resource[];
    severity: SeverityEnum;
    status: FindingStatusEnum;
    title?: string;
    type: FindingTypeEnum;
    updatedAt?: Date;
}
