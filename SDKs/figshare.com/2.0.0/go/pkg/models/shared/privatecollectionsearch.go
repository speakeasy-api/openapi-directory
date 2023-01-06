package shared

type PrivateCollectionSearchOrderDirectionEnum string

const (
	PrivateCollectionSearchOrderDirectionEnumAsc  PrivateCollectionSearchOrderDirectionEnum = "asc"
	PrivateCollectionSearchOrderDirectionEnumDesc PrivateCollectionSearchOrderDirectionEnum = "desc"
)

type PrivateCollectionSearch struct {
	Group          *int32                                     `json:"group,omitempty"`
	Institution    *int32                                     `json:"institution,omitempty"`
	Limit          *int64                                     `json:"limit,omitempty"`
	ModifiedSince  *string                                    `json:"modified_since,omitempty"`
	Offset         *int64                                     `json:"offset,omitempty"`
	OrderDirection *PrivateCollectionSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                                     `json:"page,omitempty"`
	PageSize       *int64                                     `json:"page_size,omitempty"`
	PublishedSince *string                                    `json:"published_since,omitempty"`
	SearchFor      *string                                    `json:"search_for,omitempty"`
}
