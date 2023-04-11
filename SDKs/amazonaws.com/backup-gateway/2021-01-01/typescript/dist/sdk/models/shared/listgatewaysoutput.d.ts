import { SpeakeasyBase } from "../../../internal/utils";
import { Gateway } from "./gateway";
/**
 * Success
 */
export declare class ListGatewaysOutput extends SpeakeasyBase {
    gateways?: Gateway[];
    nextToken?: string;
}
