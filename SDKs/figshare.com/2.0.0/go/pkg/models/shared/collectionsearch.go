package shared

type CollectionSearchOrderEnum string

const (
	CollectionSearchOrderEnumPublishedDate CollectionSearchOrderEnum = "published_date"
	CollectionSearchOrderEnumModifiedDate  CollectionSearchOrderEnum = "modified_date"
	CollectionSearchOrderEnumViews         CollectionSearchOrderEnum = "views"
	CollectionSearchOrderEnumShares        CollectionSearchOrderEnum = "shares"
	CollectionSearchOrderEnumCites         CollectionSearchOrderEnum = "cites"
)

type CollectionSearchOrderDirectionEnum string

const (
	CollectionSearchOrderDirectionEnumAsc  CollectionSearchOrderDirectionEnum = "asc"
	CollectionSearchOrderDirectionEnumDesc CollectionSearchOrderDirectionEnum = "desc"
)

type CollectionSearch struct {
	Doi            *string                             `json:"doi,omitempty"`
	Group          *int32                              `json:"group,omitempty"`
	Handle         *string                             `json:"handle,omitempty"`
	Institution    *int32                              `json:"institution,omitempty"`
	Limit          *int64                              `json:"limit,omitempty"`
	ModifiedSince  *string                             `json:"modified_since,omitempty"`
	Offset         *int64                              `json:"offset,omitempty"`
	Order          *CollectionSearchOrderEnum          `json:"order,omitempty"`
	OrderDirection *CollectionSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                              `json:"page,omitempty"`
	PageSize       *int64                              `json:"page_size,omitempty"`
	PublishedSince *string                             `json:"published_since,omitempty"`
	ResourceDoi    *string                             `json:"resource_doi,omitempty"`
	SearchFor      *string                             `json:"search_for,omitempty"`
}
