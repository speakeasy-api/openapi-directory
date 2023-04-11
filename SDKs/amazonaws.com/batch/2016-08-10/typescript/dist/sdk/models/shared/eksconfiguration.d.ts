import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.
 */
export declare class EksConfiguration extends SpeakeasyBase {
    eksClusterArn: string;
    kubernetesNamespace: string;
}
