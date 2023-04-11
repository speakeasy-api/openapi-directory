import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for CancelSpotInstanceRequests.
 */
export declare class CancelSpotInstanceRequestsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    spotInstanceRequestIds: string[];
}
