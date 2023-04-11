import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePair } from "./keyvaluepair";
import { MemoryInfo } from "./memoryinfo";
/**
 *  The details of an Elastic Inference Accelerator type.
 */
export declare class AcceleratorType extends SpeakeasyBase {
    acceleratorTypeName?: string;
    memoryInfo?: MemoryInfo;
    throughputInfo?: KeyValuePair[];
}
