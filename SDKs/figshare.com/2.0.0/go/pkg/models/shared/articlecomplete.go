package shared

type ArticleComplete struct {
	DefinedType     *int64    `json:"defined_type,omitempty"`
	DefinedTypeName *string   `json:"defined_type_name,omitempty"`
	Doi             *string   `json:"doi,omitempty"`
	GroupID         *float64  `json:"group_id,omitempty"`
	Handle          *string   `json:"handle,omitempty"`
	ID              *int64    `json:"id,omitempty"`
	PublishedDate   *string   `json:"published_date,omitempty"`
	Thumb           *string   `json:"thumb,omitempty"`
	Timeline        *Timeline `json:"timeline,omitempty"`
	Title           *string   `json:"title,omitempty"`
	URL             *string   `json:"url,omitempty"`
	URLPrivateAPI   *string   `json:"url_private_api,omitempty"`
	URLPrivateHTML  *string   `json:"url_private_html,omitempty"`
	URLPublicAPI    *string   `json:"url_public_api,omitempty"`
	URLPublicHTML   *string   `json:"url_public_html,omitempty"`
}
