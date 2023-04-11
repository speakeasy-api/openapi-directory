import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentStatusEnum } from "./hubcontentstatusenum";
import { HubContentTypeEnum } from "./hubcontenttypeenum";
/**
 * Information about hub content.
 */
export declare class HubContentInfo extends SpeakeasyBase {
    creationTime: Date;
    documentSchemaVersion: string;
    hubContentArn: string;
    hubContentDescription?: string;
    hubContentDisplayName?: string;
    hubContentName: string;
    hubContentSearchKeywords?: string[];
    hubContentStatus: HubContentStatusEnum;
    hubContentType: HubContentTypeEnum;
    hubContentVersion: string;
}
