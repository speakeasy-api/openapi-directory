import { SpeakeasyBase } from "../../../internal/utils";
import { Primary } from "./primary";
import { Secondary } from "./secondary";
/**
 * The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
 */
export declare class FailoverConfig extends SpeakeasyBase {
    primary: Primary;
    secondary: Secondary;
}
