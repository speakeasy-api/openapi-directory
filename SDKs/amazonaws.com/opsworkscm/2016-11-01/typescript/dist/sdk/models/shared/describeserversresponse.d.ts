import { SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";
/**
 * Success
 */
export declare class DescribeServersResponse extends SpeakeasyBase {
    nextToken?: string;
    servers?: Server[];
}
