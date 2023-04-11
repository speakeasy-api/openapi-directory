import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCallDetails } from "./apicalldetails";
import { FindingActionTypeEnum } from "./findingactiontypeenum";
/**
 * Provides information about an action that occurred for a resource and produced a policy finding.
 */
export declare class FindingAction extends SpeakeasyBase {
    actionType?: FindingActionTypeEnum;
    apiCallDetails?: ApiCallDetails;
}
