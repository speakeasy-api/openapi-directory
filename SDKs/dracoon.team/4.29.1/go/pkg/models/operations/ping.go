package operations

type PingResponse struct {
	ContentType            string
	ErrorResponse          *string
	StatusCode             int64
	Ping200TextPlainString *string
}
