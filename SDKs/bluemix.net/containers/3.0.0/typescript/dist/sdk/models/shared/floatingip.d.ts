import { SpeakeasyBase } from "../../../internal/utils";
import { Binding } from "./binding";
export declare class FloatingIP extends SpeakeasyBase {
    bindings?: Binding;
    /**
     * The public IP address that is allocated to the organization space.
     */
    ipAddress?: string;
}
