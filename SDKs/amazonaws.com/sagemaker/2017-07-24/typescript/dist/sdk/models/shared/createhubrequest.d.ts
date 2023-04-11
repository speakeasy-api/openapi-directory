import { SpeakeasyBase } from "../../../internal/utils";
import { HubS3StorageConfig } from "./hubs3storageconfig";
import { Tag } from "./tag";
export declare class CreateHubRequest extends SpeakeasyBase {
    hubDescription: string;
    hubDisplayName?: string;
    hubName: string;
    hubSearchKeywords?: string[];
    s3StorageConfig?: HubS3StorageConfig;
    tags?: Tag[];
}
