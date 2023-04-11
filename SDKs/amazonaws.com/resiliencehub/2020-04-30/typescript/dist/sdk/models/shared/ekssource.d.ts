import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input source of the Amazon Elastic Kubernetes Service cluster.
 */
export declare class EksSource extends SpeakeasyBase {
    eksClusterArn: string;
    namespaces: string[];
}
