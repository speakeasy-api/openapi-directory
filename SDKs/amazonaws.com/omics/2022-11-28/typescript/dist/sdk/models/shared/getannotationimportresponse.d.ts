import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationImportItemDetail } from "./annotationimportitemdetail";
import { FormatOptions } from "./formatoptions";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Success
 */
export declare class GetAnnotationImportResponse extends SpeakeasyBase {
    completionTime: Date;
    creationTime: Date;
    destinationName: string;
    /**
     * Formatting options for a file.
     */
    formatOptions: FormatOptions;
    id: string;
    items: AnnotationImportItemDetail[];
    roleArn: string;
    runLeftNormalization: boolean;
    status: JobStatusEnum;
    statusMessage: string;
    updateTime: Date;
}
