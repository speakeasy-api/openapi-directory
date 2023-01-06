package operations

import (
	"openapi/pkg/models/shared"
)

type ReceiptsPhotoToCsvRequestBodyImageFile struct {
	Content   []byte `multipartForm:"content"`
	ImageFile string `multipartForm:"name=imageFile"`
}

type ReceiptsPhotoToCsvRequestBody struct {
	ImageFile ReceiptsPhotoToCsvRequestBodyImageFile `multipartForm:"file"`
}

type ReceiptsPhotoToCsvSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ReceiptsPhotoToCsvRequest struct {
	Request  ReceiptsPhotoToCsvRequestBody `request:"mediaType=multipart/form-data"`
	Security ReceiptsPhotoToCsvSecurity
}

type ReceiptsPhotoToCsvResponse struct {
	Body                                       []byte
	ContentType                                string
	ReceiptsPhotoToCSV200ApplicationJSONObject map[string]interface{}
	ReceiptsPhotoToCSV200TextJSONObject        map[string]interface{}
	StatusCode                                 int64
}
