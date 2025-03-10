// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PrivateArticlePrivateLinkDeleteSecurity struct {
	OAuth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type PrivateArticlePrivateLinkDeleteRequest struct {
	// Article unique identifier
	ArticleID int64 `pathParam:"style=simple,explode=false,name=article_id"`
	// Private link token
	LinkID string `pathParam:"style=simple,explode=false,name=link_id"`
}

type PrivateArticlePrivateLinkDeleteResponse struct {
	ContentType string
	// Forbidden
	ErrorMessage *shared.ErrorMessage
	StatusCode   int
	RawResponse  *http.Response
}
