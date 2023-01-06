package operations

type SetHTMLUsingPostQueryParams struct {
	HTML  *string `queryParam:"style=form,explode=true,name=html"`
	PadID *string `queryParam:"style=form,explode=true,name=padID"`
}

type SetHTMLUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type SetHTMLUsingPostRequest struct {
	QueryParams SetHTMLUsingPostQueryParams
}

type SetHTMLUsingPostResponse struct {
	ContentType                              string
	StatusCode                               int64
	SetHTMLUsingPOST200ApplicationJSONObject *SetHTMLUsingPost200ApplicationJSON
	SetHTMLUsingPOST400ApplicationJSONObject *SetHTMLUsingPost400ApplicationJSON
	SetHTMLUsingPOST401ApplicationJSONObject *SetHTMLUsingPost401ApplicationJSON
	SetHTMLUsingPOST500ApplicationJSONObject *SetHTMLUsingPost500ApplicationJSON
}
