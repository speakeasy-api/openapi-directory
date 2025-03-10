// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ForumGetPostsThreadedPagedRequest struct {
	GetParentPost  bool  `pathParam:"style=simple,explode=false,name=getParentPost"`
	Page           int   `pathParam:"style=simple,explode=false,name=page"`
	PageSize       int   `pathParam:"style=simple,explode=false,name=pageSize"`
	ParentPostID   int64 `pathParam:"style=simple,explode=false,name=parentPostId"`
	ReplySize      int   `pathParam:"style=simple,explode=false,name=replySize"`
	RootThreadMode bool  `pathParam:"style=simple,explode=false,name=rootThreadMode"`
	// If this value is not null or empty, banned posts are requested to be returned
	Showbanned *string `queryParam:"style=form,explode=true,name=showbanned"`
	SortMode   int     `pathParam:"style=simple,explode=false,name=sortMode"`
}

// ForumGetPostsThreadedPaged200Wildcard - Look at the Response property for more information about the nature of this response
type ForumGetPostsThreadedPaged200Wildcard struct {
	DetailedErrorTrace *string
	ErrorCode          *int
	ErrorStatus        *string
	Message            *string
	MessageData        map[string]string
	Response           *shared.ForumPostSearchResponse
	ThrottleSeconds    *int
}

type ForumGetPostsThreadedPagedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
