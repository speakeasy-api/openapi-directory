import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentTypeEnum } from "./hubcontenttypeenum";
import { Tag } from "./tag";
export declare class ImportHubContentRequest extends SpeakeasyBase {
    documentSchemaVersion: string;
    hubContentDescription?: string;
    hubContentDisplayName?: string;
    hubContentDocument: string;
    hubContentMarkdown?: string;
    hubContentName: string;
    hubContentSearchKeywords?: string[];
    hubContentType: HubContentTypeEnum;
    hubContentVersion?: string;
    hubName: string;
    tags?: Tag[];
}
