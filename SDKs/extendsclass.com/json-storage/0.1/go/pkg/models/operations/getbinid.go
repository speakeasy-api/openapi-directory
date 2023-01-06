package operations

type GetBinIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBinIDRequest struct {
	PathParams GetBinIDPathParams
}

type GetBinIDResponse struct {
	ContentType                      string
	Error                            *interface{}
	StatusCode                       int64
	GetBinID200ApplicationJSONObject map[string]interface{}
}
