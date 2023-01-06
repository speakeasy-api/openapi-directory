package operations

type DeleteProjectUsernameProjectBuildCachePathParams struct {
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteProjectUsernameProjectBuildCache200ApplicationJSON struct {
	Status *string `json:"status,omitempty"`
}

type DeleteProjectUsernameProjectBuildCacheRequest struct {
	PathParams DeleteProjectUsernameProjectBuildCachePathParams
}

type DeleteProjectUsernameProjectBuildCacheResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	DeleteProjectUsernameProjectBuildCache200ApplicationJSONObject *DeleteProjectUsernameProjectBuildCache200ApplicationJSON
}
