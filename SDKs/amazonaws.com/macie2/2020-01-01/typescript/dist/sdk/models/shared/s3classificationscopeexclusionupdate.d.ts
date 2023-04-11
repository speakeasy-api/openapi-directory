import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationScopeUpdateOperationEnum } from "./classificationscopeupdateoperationenum";
/**
 * Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account.
 */
export declare class S3ClassificationScopeExclusionUpdate extends SpeakeasyBase {
    bucketNames: string[];
    operation: ClassificationScopeUpdateOperationEnum;
}
