import { SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";
import { SourceFiles } from "./sourcefiles";
/**
 * A source for a read set import job.
 */
export declare class StartReadSetImportJobSourceItem extends SpeakeasyBase {
    description?: string;
    generatedFrom?: string;
    name?: string;
    referenceArn: string;
    sampleId: string;
    sourceFileType: FileTypeEnum;
    sourceFiles: SourceFiles;
    subjectId: string;
    tags?: Record<string, string>;
}
