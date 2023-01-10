package shared

type PrivateCollectionSearchOrderEnum string

const (
	PrivateCollectionSearchOrderEnumPublishedDate PrivateCollectionSearchOrderEnum = "published_date"
	PrivateCollectionSearchOrderEnumModifiedDate  PrivateCollectionSearchOrderEnum = "modified_date"
	PrivateCollectionSearchOrderEnumViews         PrivateCollectionSearchOrderEnum = "views"
	PrivateCollectionSearchOrderEnumShares        PrivateCollectionSearchOrderEnum = "shares"
	PrivateCollectionSearchOrderEnumCites         PrivateCollectionSearchOrderEnum = "cites"
)

type PrivateCollectionSearchOrderDirectionEnum string

const (
	PrivateCollectionSearchOrderDirectionEnumAsc  PrivateCollectionSearchOrderDirectionEnum = "asc"
	PrivateCollectionSearchOrderDirectionEnumDesc PrivateCollectionSearchOrderDirectionEnum = "desc"
)

type PrivateCollectionSearch struct {
	Doi            *string                                    `json:"doi,omitempty"`
	Group          *int32                                     `json:"group,omitempty"`
	Handle         *string                                    `json:"handle,omitempty"`
	Institution    *int32                                     `json:"institution,omitempty"`
	Limit          *int64                                     `json:"limit,omitempty"`
	ModifiedSince  *string                                    `json:"modified_since,omitempty"`
	Offset         *int64                                     `json:"offset,omitempty"`
	Order          *PrivateCollectionSearchOrderEnum          `json:"order,omitempty"`
	OrderDirection *PrivateCollectionSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                                     `json:"page,omitempty"`
	PageSize       *int64                                     `json:"page_size,omitempty"`
	PublishedSince *string                                    `json:"published_since,omitempty"`
	ResourceDoi    *string                                    `json:"resource_doi,omitempty"`
	ResourceID     *string                                    `json:"resource_id,omitempty"`
	SearchFor      *string                                    `json:"search_for,omitempty"`
}
