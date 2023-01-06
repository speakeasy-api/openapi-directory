package operations

type PostMakePdfRequestBody struct {
	HTML *string `json:"html,omitempty"`
	Key  string  `json:"key"`
	URL  *string `json:"url,omitempty"`
}

type PostMakePdfRequest struct {
	Request PostMakePdfRequestBody `request:"mediaType=application/json"`
}

type PostMakePdfResponse struct {
	ContentType                              string
	StatusCode                               int64
	PostMakePdf200ApplicationPdfBinaryString []byte
}
