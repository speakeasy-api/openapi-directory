import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageSummary } from "./modelpackagesummary";
/**
 * Success
 */
export declare class ListModelPackagesOutput extends SpeakeasyBase {
    modelPackageSummaryList: ModelPackageSummary[];
    nextToken?: string;
}
