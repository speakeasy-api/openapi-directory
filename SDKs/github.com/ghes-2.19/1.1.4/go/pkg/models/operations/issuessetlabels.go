package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesSetLabelsPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesSetLabelsRequestBody1 struct {
	Name string `json:"name"`
}

type IssuesSetLabelsRequestBody2 struct {
	Labels []string `json:"labels,omitempty"`
}

type IssuesSetLabelsRequestBody4Labels struct {
	Name string `json:"name"`
}

type IssuesSetLabelsRequestBody4 struct {
	Labels []IssuesSetLabelsRequestBody4Labels `json:"labels,omitempty"`
}

type IssuesSetLabelsRequest struct {
	PathParams IssuesSetLabelsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type IssuesSetLabelsResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Labels          []shared.Label
	ValidationError *shared.ValidationError
}
