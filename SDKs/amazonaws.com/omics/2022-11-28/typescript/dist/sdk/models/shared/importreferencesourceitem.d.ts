import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceImportJobItemStatusEnum } from "./referenceimportjobitemstatusenum";
/**
 * An genome reference source.
 */
export declare class ImportReferenceSourceItem extends SpeakeasyBase {
    description?: string;
    name?: string;
    sourceFile?: string;
    status: ReferenceImportJobItemStatusEnum;
    statusMessage?: string;
    tags?: Record<string, string>;
}
