// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETAddRoleToDBClusterActionEnum
type GETAddRoleToDBClusterActionEnum string

const (
	GETAddRoleToDBClusterActionEnumAddRoleToDbCluster GETAddRoleToDBClusterActionEnum = "AddRoleToDBCluster"
)

func (e GETAddRoleToDBClusterActionEnum) ToPointer() *GETAddRoleToDBClusterActionEnum {
	return &e
}

func (e *GETAddRoleToDBClusterActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AddRoleToDBCluster":
		*e = GETAddRoleToDBClusterActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETAddRoleToDBClusterActionEnum: %v", v)
	}
}

// GETAddRoleToDBClusterVersionEnum
type GETAddRoleToDBClusterVersionEnum string

const (
	GETAddRoleToDBClusterVersionEnumTwoThousandAndFourteen1031 GETAddRoleToDBClusterVersionEnum = "2014-10-31"
)

func (e GETAddRoleToDBClusterVersionEnum) ToPointer() *GETAddRoleToDBClusterVersionEnum {
	return &e
}

func (e *GETAddRoleToDBClusterVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2014-10-31":
		*e = GETAddRoleToDBClusterVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETAddRoleToDBClusterVersionEnum: %v", v)
	}
}

type GETAddRoleToDBClusterRequest struct {
	Action GETAddRoleToDBClusterActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// The name of the DB cluster to associate the IAM role with.
	DBClusterIdentifier string `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	// The name of the feature for the Neptune DB cluster that the IAM role is to be associated with. For the list of supported feature names, see <a href="neptune/latest/userguide/api-other-apis.html#DBEngineVersion">DBEngineVersion</a>.
	FeatureName *string `queryParam:"style=form,explode=true,name=FeatureName"`
	// The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.
	RoleArn           string                           `queryParam:"style=form,explode=true,name=RoleArn"`
	Version           GETAddRoleToDBClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETAddRoleToDBClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
