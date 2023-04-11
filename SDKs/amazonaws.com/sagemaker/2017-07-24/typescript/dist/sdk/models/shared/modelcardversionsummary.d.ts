import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardStatusEnum } from "./modelcardstatusenum";
/**
 * A summary of a specific version of the model card.
 */
export declare class ModelCardVersionSummary extends SpeakeasyBase {
    creationTime: Date;
    lastModifiedTime?: Date;
    modelCardArn: string;
    modelCardName: string;
    modelCardStatus: ModelCardStatusEnum;
    modelCardVersion: number;
}
