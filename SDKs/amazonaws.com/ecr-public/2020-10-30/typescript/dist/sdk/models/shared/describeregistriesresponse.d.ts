import { SpeakeasyBase } from "../../../internal/utils";
import { Registry } from "./registry";
/**
 * Success
 */
export declare class DescribeRegistriesResponse extends SpeakeasyBase {
    nextToken?: string;
    registries: Registry[];
}
