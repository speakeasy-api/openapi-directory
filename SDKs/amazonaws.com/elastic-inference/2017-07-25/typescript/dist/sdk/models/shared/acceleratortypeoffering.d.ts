import { SpeakeasyBase } from "../../../internal/utils";
import { LocationTypeEnum } from "./locationtypeenum";
/**
 *  The offering for an Elastic Inference Accelerator type.
 */
export declare class AcceleratorTypeOffering extends SpeakeasyBase {
    acceleratorType?: string;
    location?: string;
    locationType?: LocationTypeEnum;
}
