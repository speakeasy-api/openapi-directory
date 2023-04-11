import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The security context for a job. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">Configure a security context for a pod or container</a> in the <i>Kubernetes documentation</i>.
 */
export declare class EksContainerSecurityContext extends SpeakeasyBase {
    privileged?: boolean;
    readOnlyRootFilesystem?: boolean;
    runAsGroup?: number;
    runAsNonRoot?: boolean;
    runAsUser?: number;
}
