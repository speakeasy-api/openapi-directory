// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateAddonRequestBodyResolveConflictsEnum - <p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p>
type CreateAddonRequestBodyResolveConflictsEnum string

const (
	CreateAddonRequestBodyResolveConflictsEnumOverwrite CreateAddonRequestBodyResolveConflictsEnum = "OVERWRITE"
	CreateAddonRequestBodyResolveConflictsEnumNone      CreateAddonRequestBodyResolveConflictsEnum = "NONE"
	CreateAddonRequestBodyResolveConflictsEnumPreserve  CreateAddonRequestBodyResolveConflictsEnum = "PRESERVE"
)

func (e CreateAddonRequestBodyResolveConflictsEnum) ToPointer() *CreateAddonRequestBodyResolveConflictsEnum {
	return &e
}

func (e *CreateAddonRequestBodyResolveConflictsEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OVERWRITE":
		fallthrough
	case "NONE":
		fallthrough
	case "PRESERVE":
		*e = CreateAddonRequestBodyResolveConflictsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAddonRequestBodyResolveConflictsEnum: %v", v)
	}
}

type CreateAddonRequestBody struct {
	// The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a> returns.
	AddonName string `json:"addonName"`
	// The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html"> <code>DescribeAddonVersions</code> </a>.
	AddonVersion *string `json:"addonVersion,omitempty"`
	// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
	ClientRequestToken *string `json:"clientRequestToken,omitempty"`
	// The set of configuration values for the add-on that's created. The values that you provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html"> <code>DescribeAddonConfiguration</code> </a>.
	ConfigurationValues *string `json:"configurationValues,omitempty"`
	// <p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:</p> <ul> <li> <p> <b>None</b> – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.</p> </li> <li> <p> <b>Overwrite</b> – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.</p> </li> <li> <p> <b>Preserve</b> – Not supported. You can set this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p> </li> </ul> <p>If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.</p>
	ResolveConflicts *CreateAddonRequestBodyResolveConflictsEnum `json:"resolveConflicts,omitempty"`
	// <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p> <note> <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling IAM roles for service accounts on your cluster</a> in the <i>Amazon EKS User Guide</i>.</p> </note>
	ServiceAccountRoleArn *string `json:"serviceAccountRoleArn,omitempty"`
	// The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.
	Tags map[string]string `json:"tags,omitempty"`
}

type CreateAddonRequest struct {
	RequestBody       CreateAddonRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	// The name of the cluster to create the add-on for.
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateAddonResponse struct {
	// ClientException
	ClientException interface{}
	ContentType     string
	// Success
	CreateAddonResponse *shared.CreateAddonResponse
	// InvalidParameterException
	InvalidParameterException interface{}
	// InvalidRequestException
	InvalidRequestException interface{}
	StatusCode              int
	RawResponse             *http.Response
	// ResourceInUseException
	ResourceInUseException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// ServerException
	ServerException interface{}
}
