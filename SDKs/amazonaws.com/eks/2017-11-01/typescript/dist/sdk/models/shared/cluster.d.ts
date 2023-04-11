import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
import { ClusterHealth } from "./clusterhealth";
import { ClusterStatusEnum } from "./clusterstatusenum";
import { ConnectorConfigResponse } from "./connectorconfigresponse";
import { EncryptionConfig } from "./encryptionconfig";
import { Identity } from "./identity";
import { KubernetesNetworkConfigResponse } from "./kubernetesnetworkconfigresponse";
import { Logging } from "./logging";
import { OutpostConfigResponse } from "./outpostconfigresponse";
import { VpcConfigResponse } from "./vpcconfigresponse";
/**
 * An object representing an Amazon EKS cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    arn?: string;
    certificateAuthority?: Certificate;
    clientRequestToken?: string;
    connectorConfig?: ConnectorConfigResponse;
    createdAt?: Date;
    encryptionConfig?: EncryptionConfig[];
    endpoint?: string;
    health?: ClusterHealth;
    id?: string;
    identity?: Identity;
    kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;
    logging?: Logging;
    name?: string;
    outpostConfig?: OutpostConfigResponse;
    platformVersion?: string;
    resourcesVpcConfig?: VpcConfigResponse;
    roleArn?: string;
    status?: ClusterStatusEnum;
    tags?: Record<string, string>;
    version?: string;
}
