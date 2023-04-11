import { SpeakeasyBase } from "../../../internal/utils";
import { ContentStatusEnum } from "./contentstatusenum";
/**
 * Summary information about the content.
 */
export declare class ContentSummary extends SpeakeasyBase {
    contentArn: string;
    contentId: string;
    contentType: string;
    knowledgeBaseArn: string;
    knowledgeBaseId: string;
    metadata: Record<string, string>;
    name: string;
    revisionId: string;
    status: ContentStatusEnum;
    tags?: Record<string, string>;
    title: string;
}
