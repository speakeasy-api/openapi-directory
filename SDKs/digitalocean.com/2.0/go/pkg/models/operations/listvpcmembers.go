package operations

import (
	"openapi/pkg/models/shared"
)

type ListVpcMembersPathParams struct {
	VpcID string `pathParam:"style=simple,explode=false,name=vpc_id"`
}

type ListVpcMembersQueryParams struct {
	Page         *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage      *int64  `queryParam:"style=form,explode=true,name=per_page"`
	ResourceType *string `queryParam:"style=form,explode=true,name=resource_type"`
}

type ListVpcMembers200ApplicationJSONLinksPages1 struct {
	Prev *string `json:"prev,omitempty"`
}

type ListVpcMembers200ApplicationJSONLinksPages2 struct {
	Next *string `json:"next,omitempty"`
}

type ListVpcMembers200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListVpcMembers200ApplicationJSON struct {
	Links *ListVpcMembers200ApplicationJSONLinks `json:"links,omitempty"`
}

type ListVpcMembers401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListVpcMembersRequest struct {
	PathParams  ListVpcMembersPathParams
	QueryParams ListVpcMembersQueryParams
}

type ListVpcMembersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListVpcMembers200ApplicationJSONObject                    *ListVpcMembers200ApplicationJSON
	ListVpcMembers401ApplicationJSONObject                    *ListVpcMembers401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
