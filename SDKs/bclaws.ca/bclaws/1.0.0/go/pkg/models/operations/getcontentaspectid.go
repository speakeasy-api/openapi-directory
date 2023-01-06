package operations

type GetContentAspectIDAspectIDEnum string

const (
	GetContentAspectIDAspectIDEnumComplete GetContentAspectIDAspectIDEnum = "complete"
	GetContentAspectIDAspectIDEnumCorpreg  GetContentAspectIDAspectIDEnum = "corpreg"
	GetContentAspectIDAspectIDEnumBcgaz1   GetContentAspectIDAspectIDEnum = "bcgaz1"
	GetContentAspectIDAspectIDEnumBcgaz2   GetContentAspectIDAspectIDEnum = "bcgaz2"
	GetContentAspectIDAspectIDEnumOic      GetContentAspectIDAspectIDEnum = "oic"
	GetContentAspectIDAspectIDEnumPsl      GetContentAspectIDAspectIDEnum = "psl"
	GetContentAspectIDAspectIDEnumEcb      GetContentAspectIDAspectIDEnum = "ecb"
	GetContentAspectIDAspectIDEnumHscr     GetContentAspectIDAspectIDEnum = "hscr"
	GetContentAspectIDAspectIDEnumArchOic  GetContentAspectIDAspectIDEnum = "arch_oic"
)

type GetContentAspectIDPathParams struct {
	AspectID GetContentAspectIDAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
}

type GetContentAspectIDRequest struct {
	PathParams GetContentAspectIDPathParams
}

type GetContentAspectIDResponse struct {
	ContentType string
	StatusCode  int64
}
