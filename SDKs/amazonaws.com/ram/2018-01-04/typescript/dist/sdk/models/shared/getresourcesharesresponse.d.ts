import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShare } from "./resourceshare";
/**
 * Success
 */
export declare class GetResourceSharesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShares?: ResourceShare[];
}
