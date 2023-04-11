import { SpeakeasyBase } from "../../../internal/utils";
import { SslPolicy } from "./sslpolicy";
/**
 * Success
 */
export declare class DescribeSSLPoliciesOutput extends SpeakeasyBase {
    nextMarker?: string;
    sslPolicies?: SslPolicy[];
}
