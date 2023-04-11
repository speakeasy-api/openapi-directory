import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceStatusEnum } from "./referencestatusenum";
/**
 * A genome reference.
 */
export declare class ReferenceListItem extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    description?: string;
    id: string;
    md5: string;
    name?: string;
    referenceStoreId: string;
    status?: ReferenceStatusEnum;
    updateTime: Date;
}
