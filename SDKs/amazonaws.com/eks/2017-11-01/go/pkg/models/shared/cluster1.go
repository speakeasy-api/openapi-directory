package shared

import (
	"time"
)

// Cluster1
// An object representing an Amazon EKS cluster.
type Cluster1 struct {
	Arn                     *string                          `json:"arn,omitempty"`
	CertificateAuthority    *Certificate                     `json:"certificateAuthority,omitempty"`
	ClientRequestToken      *string                          `json:"clientRequestToken,omitempty"`
	ConnectorConfig         *ConnectorConfigResponse         `json:"connectorConfig,omitempty"`
	CreatedAt               *time.Time                       `json:"createdAt,omitempty"`
	EncryptionConfig        []EncryptionConfig               `json:"encryptionConfig,omitempty"`
	Endpoint                *string                          `json:"endpoint,omitempty"`
	Identity                *Identity                        `json:"identity,omitempty"`
	KubernetesNetworkConfig *KubernetesNetworkConfigResponse `json:"kubernetesNetworkConfig,omitempty"`
	Logging                 *Logging1                        `json:"logging,omitempty"`
	Name                    *string                          `json:"name,omitempty"`
	PlatformVersion         *string                          `json:"platformVersion,omitempty"`
	ResourcesVpcConfig      *VpcConfigResponse               `json:"resourcesVpcConfig,omitempty"`
	RoleArn                 *string                          `json:"roleArn,omitempty"`
	Status                  *ClusterStatusEnum               `json:"status,omitempty"`
	Tags                    map[string]string                `json:"tags,omitempty"`
	Version                 *string                          `json:"version,omitempty"`
}
