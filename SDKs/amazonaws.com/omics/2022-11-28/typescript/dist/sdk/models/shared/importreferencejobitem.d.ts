import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceImportJobStatusEnum } from "./referenceimportjobstatusenum";
/**
 * An import reference job.
 */
export declare class ImportReferenceJobItem extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    id: string;
    referenceStoreId: string;
    roleArn: string;
    status: ReferenceImportJobStatusEnum;
}
