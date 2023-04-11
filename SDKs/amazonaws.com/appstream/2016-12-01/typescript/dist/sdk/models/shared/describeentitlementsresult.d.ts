import { SpeakeasyBase } from "../../../internal/utils";
import { Entitlement } from "./entitlement";
/**
 * Success
 */
export declare class DescribeEntitlementsResult extends SpeakeasyBase {
    entitlements?: Entitlement[];
    nextToken?: string;
}
