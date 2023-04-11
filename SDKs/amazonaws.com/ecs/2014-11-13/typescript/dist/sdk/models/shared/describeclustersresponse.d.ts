import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
import { Failure } from "./failure";
/**
 * Success
 */
export declare class DescribeClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    failures?: Failure[];
}
