import { SpeakeasyBase } from "../../../internal/utils";
import { ImportReferenceSourceItem } from "./importreferencesourceitem";
import { ReferenceImportJobStatusEnum } from "./referenceimportjobstatusenum";
/**
 * Success
 */
export declare class GetReferenceImportJobResponse extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    id: string;
    referenceStoreId: string;
    roleArn: string;
    sources: ImportReferenceSourceItem[];
    status: ReferenceImportJobStatusEnum;
    statusMessage?: string;
}
