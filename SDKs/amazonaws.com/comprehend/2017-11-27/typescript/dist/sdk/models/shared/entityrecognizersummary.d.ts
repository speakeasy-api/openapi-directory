import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 *  Describes the information about an entity recognizer and its versions.
 */
export declare class EntityRecognizerSummary extends SpeakeasyBase {
    latestVersionCreatedAt?: Date;
    latestVersionName?: string;
    latestVersionStatus?: ModelStatusEnum;
    numberOfVersions?: number;
    recognizerName?: string;
}
