import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Details about an imported annotation item.
 */
export declare class AnnotationImportItemDetail extends SpeakeasyBase {
    jobStatus: JobStatusEnum;
    source: string;
}
