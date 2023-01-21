package shared

type SseTypeEnum string

const (
	SSETypeEnumAes256 SseTypeEnum = "AES256"
	SSETypeEnumKms    SseTypeEnum = "KMS"
)
