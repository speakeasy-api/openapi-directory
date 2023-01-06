package shared

type PrivateAuthorsSearchOrderEnum string

const (
	PrivateAuthorsSearchOrderEnumPublishedDate PrivateAuthorsSearchOrderEnum = "published_date"
	PrivateAuthorsSearchOrderEnumModifiedDate  PrivateAuthorsSearchOrderEnum = "modified_date"
	PrivateAuthorsSearchOrderEnumViews         PrivateAuthorsSearchOrderEnum = "views"
	PrivateAuthorsSearchOrderEnumShares        PrivateAuthorsSearchOrderEnum = "shares"
	PrivateAuthorsSearchOrderEnumDownloads     PrivateAuthorsSearchOrderEnum = "downloads"
	PrivateAuthorsSearchOrderEnumCites         PrivateAuthorsSearchOrderEnum = "cites"
)

type PrivateAuthorsSearchOrderDirectionEnum string

const (
	PrivateAuthorsSearchOrderDirectionEnumAsc  PrivateAuthorsSearchOrderDirectionEnum = "asc"
	PrivateAuthorsSearchOrderDirectionEnumDesc PrivateAuthorsSearchOrderDirectionEnum = "desc"
)

type PrivateAuthorsSearch struct {
	GroupID        *int64                                  `json:"group_id,omitempty"`
	InstitutionID  *int64                                  `json:"institution_id,omitempty"`
	IsActive       *bool                                   `json:"is_active,omitempty"`
	IsPublic       *bool                                   `json:"is_public,omitempty"`
	Limit          *int64                                  `json:"limit,omitempty"`
	Offset         *int64                                  `json:"offset,omitempty"`
	Orcid          *string                                 `json:"orcid,omitempty"`
	Order          *PrivateAuthorsSearchOrderEnum          `json:"order,omitempty"`
	OrderDirection *PrivateAuthorsSearchOrderDirectionEnum `json:"order_direction,omitempty"`
	Page           *int64                                  `json:"page,omitempty"`
	PageSize       *int64                                  `json:"page_size,omitempty"`
	SearchFor      *string                                 `json:"search_for,omitempty"`
}
