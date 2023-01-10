package shared

type PrivateArticleSearchOrderEnum string

const (
	PrivateArticleSearchOrderEnumPublishedDate PrivateArticleSearchOrderEnum = "published_date"
	PrivateArticleSearchOrderEnumModifiedDate  PrivateArticleSearchOrderEnum = "modified_date"
	PrivateArticleSearchOrderEnumViews         PrivateArticleSearchOrderEnum = "views"
	PrivateArticleSearchOrderEnumShares        PrivateArticleSearchOrderEnum = "shares"
	PrivateArticleSearchOrderEnumDownloads     PrivateArticleSearchOrderEnum = "downloads"
	PrivateArticleSearchOrderEnumCites         PrivateArticleSearchOrderEnum = "cites"
)

type PrivateArticleSearchOrderDirectionEnum string

const (
	PrivateArticleSearchOrderDirectionEnumAsc  PrivateArticleSearchOrderDirectionEnum = "asc"
	PrivateArticleSearchOrderDirectionEnumDesc PrivateArticleSearchOrderDirectionEnum = "desc"
)

type PrivateArticleSearch struct {
	Doi            *string                                 `json:"doi,omitempty"`
	Group          *int32                                  `json:"group,omitempty"`
	Handle         *string                                 `json:"handle,omitempty"`
	Institution    *int32                                  `json:"institution,omitempty"`
	ItemType       *int64                                  `json:"item_type,omitempty"`
	Limit          *int64                                  `json:"limit,omitempty"`
	ModifiedSince  *string                                 `json:"modified_since,omitempty"`
	Offset         *int64                                  `json:"offset,omitempty"`
	Order          *PrivateArticleSearchOrderEnum          `json:"order,omitempty"`
	OrderDirection *PrivateArticleSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                                  `json:"page,omitempty"`
	PageSize       *int64                                  `json:"page_size,omitempty"`
	PublishedSince *string                                 `json:"published_since,omitempty"`
	ResourceDoi    *string                                 `json:"resource_doi,omitempty"`
	ResourceID     *string                                 `json:"resource_id,omitempty"`
	SearchFor      *string                                 `json:"search_for,omitempty"`
}
