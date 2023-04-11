import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for CancelSpotFleetRequests.
 */
export declare class CancelSpotFleetRequestsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    spotFleetRequestIds: string[];
    terminateInstances: boolean;
}
