import { SpeakeasyBase } from "../../../internal/utils";
import { HubS3StorageConfig } from "./hubs3storageconfig";
import { HubStatusEnum } from "./hubstatusenum";
/**
 * Success
 */
export declare class DescribeHubResponse extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    hubArn: string;
    hubDescription?: string;
    hubDisplayName?: string;
    hubName: string;
    hubSearchKeywords?: string[];
    hubStatus: HubStatusEnum;
    lastModifiedTime: Date;
    s3StorageConfig?: HubS3StorageConfig;
}
