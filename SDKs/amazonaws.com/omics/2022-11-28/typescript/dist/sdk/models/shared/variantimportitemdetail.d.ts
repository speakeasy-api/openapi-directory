import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Details about an imported variant item.
 */
export declare class VariantImportItemDetail extends SpeakeasyBase {
    jobStatus: JobStatusEnum;
    source: string;
    statusMessage?: string;
}
