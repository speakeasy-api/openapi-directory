import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAttribute } from "./accountattribute";
/**
 * Success
 */
export declare class DescribeAccountAttributesResult extends SpeakeasyBase {
    accountAttributes?: AccountAttribute[];
    nextToken?: string;
}
