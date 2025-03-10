// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetSubscriptionDefinitionVersionRequest struct {
	// The token for the next set of results, or ''null'' if there are no additional results.
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
	// The ID of the subscription definition.
	SubscriptionDefinitionID string `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionId"`
	// The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
	SubscriptionDefinitionVersionID string  `pathParam:"style=simple,explode=false,name=SubscriptionDefinitionVersionId"`
	XAmzAlgorithm                   *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256               *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                  *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                        *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken               *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                   *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders               *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetSubscriptionDefinitionVersionResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// Success
	GetSubscriptionDefinitionVersionResponse *shared.GetSubscriptionDefinitionVersionResponse
	StatusCode                               int
	RawResponse                              *http.Response
}
