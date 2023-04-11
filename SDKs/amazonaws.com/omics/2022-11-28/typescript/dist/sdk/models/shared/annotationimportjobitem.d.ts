import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * An annotation import job.
 */
export declare class AnnotationImportJobItem extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    destinationName: string;
    id: string;
    roleArn: string;
    runLeftNormalization?: boolean;
    status: JobStatusEnum;
    updateTime: Date;
}
