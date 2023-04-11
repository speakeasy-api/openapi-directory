import { SpeakeasyBase } from "../../../internal/utils";
import { DBProxyEndpoint } from "./dbproxyendpoint";
/**
 * Success
 */
export declare class DescribeDBProxyEndpointsResponse extends SpeakeasyBase {
    dbProxyEndpoints?: DBProxyEndpoint[];
    marker?: string;
}
