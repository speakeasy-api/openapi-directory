import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * A variant import job.
 */
export declare class VariantImportJobItem extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    destinationName: string;
    id: string;
    roleArn: string;
    runLeftNormalization?: boolean;
    status: JobStatusEnum;
    updateTime: Date;
}
