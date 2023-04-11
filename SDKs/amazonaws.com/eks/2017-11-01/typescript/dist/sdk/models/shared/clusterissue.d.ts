import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterIssueCodeEnum } from "./clusterissuecodeenum";
/**
 * An issue with your local Amazon EKS cluster on an Amazon Web Services Outpost. You can't use this API with an Amazon EKS cluster on the Amazon Web Services cloud.
 */
export declare class ClusterIssue extends SpeakeasyBase {
    code?: ClusterIssueCodeEnum;
    message?: string;
    resourceIds?: string[];
}
