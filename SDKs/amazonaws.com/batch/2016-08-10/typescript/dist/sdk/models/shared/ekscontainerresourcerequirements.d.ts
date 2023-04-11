import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type and amount of resources to assign to a container. The supported resources include <code>memory</code>, <code>cpu</code>, and <code>nvidia.com/gpu</code>. For more information, see <a href="https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/">Resource management for pods and containers</a> in the <i>Kubernetes documentation</i>.
 */
export declare class EksContainerResourceRequirements extends SpeakeasyBase {
    limits?: Record<string, string>;
    requests?: Record<string, string>;
}
