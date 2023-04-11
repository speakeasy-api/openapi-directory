import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
/**
 * A summary of the model card.
 */
export declare class ModelCardSummary extends SpeakeasyBase {
    creationTime: Date;
    lastModifiedTime?: Date;
    modelCardArn: string;
    modelCardName: string;
    modelCardStatus: ModelCardStatusEnum;
}
