import { SpeakeasyBase } from "../../../internal/utils";
import { ImportResourceSpecification } from "./importresourcespecification";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
/**
 * Success
 */
export declare class StartImportResponse extends SpeakeasyBase {
    creationDateTime?: Date;
    importId?: string;
    importStatus?: ImportStatusEnum;
    mergeStrategy?: MergeStrategyEnum;
    resourceSpecification?: ImportResourceSpecification;
}
