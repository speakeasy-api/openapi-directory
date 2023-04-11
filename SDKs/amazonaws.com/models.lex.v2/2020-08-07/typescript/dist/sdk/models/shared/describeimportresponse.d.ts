import { SpeakeasyBase } from "../../../internal/utils";
import { ImportResourceSpecification } from "./importresourcespecification";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
/**
 * Success
 */
export declare class DescribeImportResponse extends SpeakeasyBase {
    creationDateTime?: Date;
    failureReasons?: string[];
    importId?: string;
    importStatus?: ImportStatusEnum;
    importedResourceId?: string;
    importedResourceName?: string;
    lastUpdatedDateTime?: Date;
    mergeStrategy?: MergeStrategyEnum;
    resourceSpecification?: ImportResourceSpecification;
}
