import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) on an instance. To exclude accelerator-enabled instance types, set <code>Max</code> to <code>0</code>.
 */
export declare class AcceleratorCountRequest extends SpeakeasyBase {
    max?: number;
    min?: number;
}
