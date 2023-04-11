import { SpeakeasyBase } from "../../../internal/utils";
import { ContentStatusEnum } from "./contentstatusenum";
/**
 * Information about the content.
 */
export declare class ContentData extends SpeakeasyBase {
    contentArn: string;
    contentId: string;
    contentType: string;
    knowledgeBaseArn: string;
    knowledgeBaseId: string;
    linkOutUri?: string;
    metadata: Record<string, string>;
    name: string;
    revisionId: string;
    status: ContentStatusEnum;
    tags?: Record<string, string>;
    title: string;
    url: string;
    urlExpiry: Date;
}
