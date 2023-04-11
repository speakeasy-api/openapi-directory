import { SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
/**
 * Success
 */
export declare class ListAcceleratorsResponse extends SpeakeasyBase {
    accelerators?: Accelerator[];
    nextToken?: string;
}
