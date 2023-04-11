import { SpeakeasyBase } from "../../../internal/utils";
import { EksAttemptContainerDetail } from "./eksattemptcontainerdetail";
/**
 * An object that represents the details of a job attempt for a job attempt by an Amazon EKS container.
 */
export declare class EksAttemptDetail extends SpeakeasyBase {
    containers?: EksAttemptContainerDetail[];
    nodeName?: string;
    podName?: string;
    startedAt?: number;
    statusReason?: string;
    stoppedAt?: number;
}
