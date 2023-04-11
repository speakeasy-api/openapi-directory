import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterIssue } from "./clusterissue";
/**
 * An object representing the health of your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.
 */
export declare class ClusterHealth extends SpeakeasyBase {
    issues?: ClusterIssue[];
}
