import { SpeakeasyBase } from "../../../internal/utils";
import { HubContentDependency } from "./hubcontentdependency";
import { HubContentStatusEnum } from "./hubcontentstatusenum";
import { HubContentTypeEnum } from "./hubcontenttypeenum";
/**
 * Success
 */
export declare class DescribeHubContentResponse extends SpeakeasyBase {
    creationTime: Date;
    documentSchemaVersion: string;
    failureReason?: string;
    hubArn: string;
    hubContentArn: string;
    hubContentDependencies?: HubContentDependency[];
    hubContentDescription?: string;
    hubContentDisplayName?: string;
    hubContentDocument: string;
    hubContentMarkdown?: string;
    hubContentName: string;
    hubContentSearchKeywords?: string[];
    hubContentStatus: HubContentStatusEnum;
    hubContentType: HubContentTypeEnum;
    hubContentVersion: string;
    hubName: string;
}
