package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassificationInclusionsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetClassificationInclusionsID200ApplicationVndAPIPlusJSON struct {
	Data  *shared.ClassificationInclusion `json:"data,omitempty"`
	Links *shared.ResourceLink            `json:"links,omitempty"`
}

type GetClassificationInclusionsIDRequest struct {
	PathParams GetClassificationInclusionsIDPathParams
}

type GetClassificationInclusionsIDResponse struct {
	ContentType                                                     string
	Headers                                                         map[string][]string
	StatusCode                                                      int64
	GetClassificationInclusionsID200ApplicationVndAPIPlusJSONObject *GetClassificationInclusionsID200ApplicationVndAPIPlusJSON
}
