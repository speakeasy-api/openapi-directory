import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { FindingSource } from "./findingsource";
import { FindingStatusEnum } from "./findingstatusenum";
/**
 * Contains information about a finding.
**/
export declare class Finding extends SpeakeasyBase {
    action?: string[];
    analyzedAt: Date;
    condition: Record<string, string>;
    createdAt: Date;
    error?: string;
    id: string;
    isPublic?: boolean;
    principal?: Record<string, string>;
    resource?: string;
    resourceOwnerAccount: string;
    resourceType: ResourceTypeEnum;
    sources?: FindingSource[];
    status: FindingStatusEnum;
    updatedAt: Date;
}
