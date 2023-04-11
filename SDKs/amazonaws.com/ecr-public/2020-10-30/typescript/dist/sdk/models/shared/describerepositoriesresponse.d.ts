import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
/**
 * Success
 */
export declare class DescribeRepositoriesResponse extends SpeakeasyBase {
    nextToken?: string;
    repositories?: Repository[];
}
