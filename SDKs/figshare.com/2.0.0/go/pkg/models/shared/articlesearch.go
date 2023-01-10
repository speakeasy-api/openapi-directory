package shared

type ArticleSearchOrderEnum string

const (
	ArticleSearchOrderEnumPublishedDate ArticleSearchOrderEnum = "published_date"
	ArticleSearchOrderEnumModifiedDate  ArticleSearchOrderEnum = "modified_date"
	ArticleSearchOrderEnumViews         ArticleSearchOrderEnum = "views"
	ArticleSearchOrderEnumShares        ArticleSearchOrderEnum = "shares"
	ArticleSearchOrderEnumDownloads     ArticleSearchOrderEnum = "downloads"
	ArticleSearchOrderEnumCites         ArticleSearchOrderEnum = "cites"
)

type ArticleSearchOrderDirectionEnum string

const (
	ArticleSearchOrderDirectionEnumAsc  ArticleSearchOrderDirectionEnum = "asc"
	ArticleSearchOrderDirectionEnumDesc ArticleSearchOrderDirectionEnum = "desc"
)

type ArticleSearch struct {
	Doi            *string                          `json:"doi,omitempty"`
	Group          *int32                           `json:"group,omitempty"`
	Handle         *string                          `json:"handle,omitempty"`
	Institution    *int32                           `json:"institution,omitempty"`
	ItemType       *int64                           `json:"item_type,omitempty"`
	Limit          *int64                           `json:"limit,omitempty"`
	ModifiedSince  *string                          `json:"modified_since,omitempty"`
	Offset         *int64                           `json:"offset,omitempty"`
	Order          *ArticleSearchOrderEnum          `json:"order,omitempty"`
	OrderDirection *ArticleSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                           `json:"page,omitempty"`
	PageSize       *int64                           `json:"page_size,omitempty"`
	PublishedSince *string                          `json:"published_since,omitempty"`
	ResourceDoi    *string                          `json:"resource_doi,omitempty"`
	SearchFor      *string                          `json:"search_for,omitempty"`
}
