package operations

type GetSearchAspectIDFullsearchAspectIDEnum string

const (
	GetSearchAspectIDFullsearchAspectIDEnumComplete GetSearchAspectIDFullsearchAspectIDEnum = "complete"
	GetSearchAspectIDFullsearchAspectIDEnumCorpreg  GetSearchAspectIDFullsearchAspectIDEnum = "corpreg"
	GetSearchAspectIDFullsearchAspectIDEnumBcgaz1   GetSearchAspectIDFullsearchAspectIDEnum = "bcgaz1"
	GetSearchAspectIDFullsearchAspectIDEnumBcgaz2   GetSearchAspectIDFullsearchAspectIDEnum = "bcgaz2"
	GetSearchAspectIDFullsearchAspectIDEnumOic      GetSearchAspectIDFullsearchAspectIDEnum = "oic"
	GetSearchAspectIDFullsearchAspectIDEnumPsl      GetSearchAspectIDFullsearchAspectIDEnum = "psl"
	GetSearchAspectIDFullsearchAspectIDEnumEcb      GetSearchAspectIDFullsearchAspectIDEnum = "ecb"
	GetSearchAspectIDFullsearchAspectIDEnumHscr     GetSearchAspectIDFullsearchAspectIDEnum = "hscr"
	GetSearchAspectIDFullsearchAspectIDEnumArchOic  GetSearchAspectIDFullsearchAspectIDEnum = "arch_oic"
)

type GetSearchAspectIDFullsearchPathParams struct {
	AspectID GetSearchAspectIDFullsearchAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
}

type GetSearchAspectIDFullsearchQueryParams struct {
	E     int64  `queryParam:"style=form,explode=true,name=e"`
	LFrag int64  `queryParam:"style=form,explode=true,name=lFrag"`
	NFrag int64  `queryParam:"style=form,explode=true,name=nFrag"`
	Q     string `queryParam:"style=form,explode=true,name=q"`
	S     string `queryParam:"style=form,explode=true,name=s"`
}

type GetSearchAspectIDFullsearchRequest struct {
	PathParams  GetSearchAspectIDFullsearchPathParams
	QueryParams GetSearchAspectIDFullsearchQueryParams
}

type GetSearchAspectIDFullsearchResponse struct {
	ContentType string
	StatusCode  int64
}
