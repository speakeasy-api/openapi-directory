import { SpeakeasyBase } from "../../../internal/utils";
import { Voice } from "./voice";
/**
 * Success
 */
export declare class DescribeVoicesOutput extends SpeakeasyBase {
    nextToken?: string;
    voices?: Voice[];
}
