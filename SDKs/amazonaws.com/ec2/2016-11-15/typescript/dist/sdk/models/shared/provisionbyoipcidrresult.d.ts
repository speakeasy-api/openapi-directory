import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the address range.
**/
export declare class ProvisionByoipCidrResultByoipCidr extends SpeakeasyBase {
    cidr?: Record<string, any>;
    description?: Record<string, any>;
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
export declare class ProvisionByoipCidrResult extends SpeakeasyBase {
    byoipCidr?: ProvisionByoipCidrResultByoipCidr;
}
