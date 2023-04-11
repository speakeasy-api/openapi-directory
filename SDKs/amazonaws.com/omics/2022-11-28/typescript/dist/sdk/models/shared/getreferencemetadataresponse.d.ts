import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceFiles } from "./referencefiles";
import { ReferenceStatusEnum } from "./referencestatusenum";
/**
 * Success
 */
export declare class GetReferenceMetadataResponse extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    description?: string;
    files?: ReferenceFiles;
    id: string;
    md5: string;
    name?: string;
    referenceStoreId: string;
    status?: ReferenceStatusEnum;
    updateTime: Date;
}
