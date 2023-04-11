import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeAssetStateEnum } from "./computeassetstateenum";
/**
 *  Information about compute hardware assets.
 */
export declare class ComputeAttributes extends SpeakeasyBase {
    hostId?: string;
    state?: ComputeAssetStateEnum;
}
