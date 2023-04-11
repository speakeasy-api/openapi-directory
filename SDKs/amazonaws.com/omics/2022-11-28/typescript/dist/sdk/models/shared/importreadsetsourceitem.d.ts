import { SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";
import { ReadSetImportJobItemStatusEnum } from "./readsetimportjobitemstatusenum";
import { SourceFiles } from "./sourcefiles";
/**
 * A source for an import read set job.
 */
export declare class ImportReadSetSourceItem extends SpeakeasyBase {
    description?: string;
    generatedFrom?: string;
    name?: string;
    referenceArn?: string;
    sampleId: string;
    sourceFileType: FileTypeEnum;
    sourceFiles: SourceFiles;
    status: ReadSetImportJobItemStatusEnum;
    statusMessage?: string;
    subjectId: string;
    tags?: Record<string, string>;
}
