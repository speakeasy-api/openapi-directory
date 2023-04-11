import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the configuration of a Kubernetes <code>hostPath</code> volume. A <code>hostPath</code> volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see <a href="https://kubernetes.io/docs/concepts/storage/volumes/#hostpath">hostPath</a> in the <i>Kubernetes documentation</i>.
 */
export declare class EksHostPath extends SpeakeasyBase {
    path?: string;
}
