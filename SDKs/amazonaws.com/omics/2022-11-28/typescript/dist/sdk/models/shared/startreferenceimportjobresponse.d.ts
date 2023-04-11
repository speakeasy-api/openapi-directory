import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceImportJobStatusEnum } from "./referenceimportjobstatusenum";
/**
 * Success
 */
export declare class StartReferenceImportJobResponse extends SpeakeasyBase {
    creationTime: Date;
    id: string;
    referenceStoreId: string;
    roleArn: string;
    status: ReferenceImportJobStatusEnum;
}
