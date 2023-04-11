import { SpeakeasyBase } from "../../../internal/utils";
import { Canary } from "./canary";
/**
 * Success
 */
export declare class DescribeCanariesResponse extends SpeakeasyBase {
    canaries?: Canary[];
    nextToken?: string;
}
