import { SpeakeasyBase } from "../../../internal/utils";
import { VariantImportJobItem } from "./variantimportjobitem";
/**
 * Success
 */
export declare class ListVariantImportJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    variantImportJobs?: VariantImportJobItem[];
}
