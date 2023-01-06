package shared

type PrivateArticleSearchOrderDirectionEnum string

const (
	PrivateArticleSearchOrderDirectionEnumAsc  PrivateArticleSearchOrderDirectionEnum = "asc"
	PrivateArticleSearchOrderDirectionEnumDesc PrivateArticleSearchOrderDirectionEnum = "desc"
)

type PrivateArticleSearch struct {
	Group          *int32                                  `json:"group,omitempty"`
	Institution    *int32                                  `json:"institution,omitempty"`
	Limit          *int64                                  `json:"limit,omitempty"`
	ModifiedSince  *string                                 `json:"modified_since,omitempty"`
	Offset         *int64                                  `json:"offset,omitempty"`
	OrderDirection *PrivateArticleSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                                  `json:"page,omitempty"`
	PageSize       *int64                                  `json:"page_size,omitempty"`
	PublishedSince *string                                 `json:"published_since,omitempty"`
	SearchFor      *string                                 `json:"search_for,omitempty"`
}
