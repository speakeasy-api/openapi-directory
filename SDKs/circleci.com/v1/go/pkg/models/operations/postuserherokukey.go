package operations

type PostUserHerokuKey403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostUserHerokuKeyResponse struct {
	ContentType                               string
	StatusCode                                int64
	PostUserHerokuKey403ApplicationJSONObject *PostUserHerokuKey403ApplicationJSON
}
