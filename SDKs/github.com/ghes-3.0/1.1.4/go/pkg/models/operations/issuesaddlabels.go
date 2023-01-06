package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesAddLabelsPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesAddLabelsRequestBody1 struct {
	Name string `json:"name"`
}

type IssuesAddLabelsRequestBody3 struct {
	Labels []string `json:"labels,omitempty"`
}

type IssuesAddLabelsRequestBody5Labels struct {
	Name string `json:"name"`
}

type IssuesAddLabelsRequestBody5 struct {
	Labels []IssuesAddLabelsRequestBody5Labels `json:"labels,omitempty"`
}

type IssuesAddLabelsRequest struct {
	PathParams IssuesAddLabelsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type IssuesAddLabelsResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Labels          []shared.Label
	ValidationError *shared.ValidationError
}
