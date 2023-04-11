import { SpeakeasyBase } from "../../../internal/utils";
import { LayerFailureCodeEnum } from "./layerfailurecodeenum";
/**
 * An object that represents an Amazon ECR image layer failure.
 */
export declare class LayerFailure extends SpeakeasyBase {
    failureCode?: LayerFailureCodeEnum;
    failureReason?: string;
    layerDigest?: string;
}
