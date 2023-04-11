import { SpeakeasyBase } from "../../../internal/utils";
import { VariantStatusEnum } from "./variantstatusenum";
/**
 * Describes the status of the production variant.
 */
export declare class ProductionVariantStatus extends SpeakeasyBase {
    startTime?: Date;
    status: VariantStatusEnum;
    statusMessage?: string;
}
