import { SpeakeasyBase } from "../../../internal/utils";
import { JobStatusEnum } from "./jobstatusenum";
import { VariantImportItemDetail } from "./variantimportitemdetail";
/**
 * Success
 */
export declare class GetVariantImportResponse extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    destinationName: string;
    id: string;
    items: VariantImportItemDetail[];
    roleArn: string;
    runLeftNormalization: boolean;
    status: JobStatusEnum;
    statusMessage: string;
    updateTime: Date;
}
