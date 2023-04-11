import { SpeakeasyBase } from "../../../internal/utils";
import { ControlPlanePlacementResponse } from "./controlplaneplacementresponse";
/**
 * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.
 */
export declare class OutpostConfigResponse extends SpeakeasyBase {
    controlPlaneInstanceType: string;
    controlPlanePlacement?: ControlPlanePlacementResponse;
    outpostArns: string[];
}
