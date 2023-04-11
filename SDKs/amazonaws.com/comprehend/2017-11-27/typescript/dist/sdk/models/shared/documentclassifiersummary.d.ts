import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * Describes information about a document classifier and its versions.
 */
export declare class DocumentClassifierSummary extends SpeakeasyBase {
    documentClassifierName?: string;
    latestVersionCreatedAt?: Date;
    latestVersionName?: string;
    latestVersionStatus?: ModelStatusEnum;
    numberOfVersions?: number;
}
