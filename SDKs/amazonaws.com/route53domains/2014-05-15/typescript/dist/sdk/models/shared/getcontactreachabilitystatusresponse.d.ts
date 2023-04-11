import { SpeakeasyBase } from "../../../internal/utils";
import { ReachabilityStatusEnum } from "./reachabilitystatusenum";
/**
 * Success
 */
export declare class GetContactReachabilityStatusResponse extends SpeakeasyBase {
    domainName?: string;
    status?: ReachabilityStatusEnum;
}
