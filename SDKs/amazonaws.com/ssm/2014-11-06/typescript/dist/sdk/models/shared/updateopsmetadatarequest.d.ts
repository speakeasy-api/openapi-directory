import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";
export declare class UpdateOpsMetadataRequest extends SpeakeasyBase {
    keysToDelete?: string[];
    metadataToUpdate?: Record<string, MetadataValue>;
    opsMetadataArn: string;
}
