import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupSummary } from "./modelpackagegroupsummary";
/**
 * Success
 */
export declare class ListModelPackageGroupsOutput extends SpeakeasyBase {
    modelPackageGroupSummaryList: ModelPackageGroupSummary[];
    nextToken?: string;
}
