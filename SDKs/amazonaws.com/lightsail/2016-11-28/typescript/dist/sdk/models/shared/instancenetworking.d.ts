import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePortInfo } from "./instanceportinfo";
import { MonthlyTransfer } from "./monthlytransfer";
/**
 * Describes monthly data transfer rates and port information for an instance.
 */
export declare class InstanceNetworking extends SpeakeasyBase {
    monthlyTransfer?: MonthlyTransfer;
    ports?: InstancePortInfo[];
}
