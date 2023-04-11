import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/">Volumes</a> in the <i>Kubernetes documentation</i>.
 */
export declare class EksContainerVolumeMount extends SpeakeasyBase {
    mountPath?: string;
    name?: string;
    readOnly?: boolean;
}
