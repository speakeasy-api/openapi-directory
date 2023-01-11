import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the address pool.
**/
export declare class WithdrawByoipCidrResultByoipCidr extends SpeakeasyBase {
    cidr?: Record<string, any>;
    description?: Record<string, any>;
    state?: Record<string, any>;
    statusMessage?: Record<string, any>;
}
export declare class WithdrawByoipCidrResult extends SpeakeasyBase {
    byoipCidr?: WithdrawByoipCidrResultByoipCidr;
}
