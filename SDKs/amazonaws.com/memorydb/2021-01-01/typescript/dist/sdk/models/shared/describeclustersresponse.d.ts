import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Success
 */
export declare class DescribeClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    nextToken?: string;
}
