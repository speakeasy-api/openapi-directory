// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PullsSubmitReviewRequestBodyEventEnum - The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
type PullsSubmitReviewRequestBodyEventEnum string

const (
	PullsSubmitReviewRequestBodyEventEnumApprove        PullsSubmitReviewRequestBodyEventEnum = "APPROVE"
	PullsSubmitReviewRequestBodyEventEnumRequestChanges PullsSubmitReviewRequestBodyEventEnum = "REQUEST_CHANGES"
	PullsSubmitReviewRequestBodyEventEnumComment        PullsSubmitReviewRequestBodyEventEnum = "COMMENT"
)

func (e PullsSubmitReviewRequestBodyEventEnum) ToPointer() *PullsSubmitReviewRequestBodyEventEnum {
	return &e
}

func (e *PullsSubmitReviewRequestBodyEventEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "APPROVE":
		fallthrough
	case "REQUEST_CHANGES":
		fallthrough
	case "COMMENT":
		*e = PullsSubmitReviewRequestBodyEventEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PullsSubmitReviewRequestBodyEventEnum: %v", v)
	}
}

type PullsSubmitReviewRequestBody struct {
	// The body text of the pull request review
	Body *string `json:"body,omitempty"`
	// The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
	Event PullsSubmitReviewRequestBodyEventEnum `json:"event"`
}

type PullsSubmitReviewRequest struct {
	RequestBody PullsSubmitReviewRequestBody `request:"mediaType=application/json"`
	Owner       string                       `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber  int64                        `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo        string                       `pathParam:"style=simple,explode=false,name=repo"`
	// review_id parameter
	ReviewID int64 `pathParam:"style=simple,explode=false,name=review_id"`
}

type PullsSubmitReviewResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Forbidden
	BasicError *shared.BasicError
	// Response
	PullRequestReview *shared.PullRequestReview
	// Validation failed
	ValidationErrorSimple *shared.ValidationErrorSimple
}
