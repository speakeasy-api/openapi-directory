package shared

type DocumentAttributeValueTypeEnum string

const (
	DocumentAttributeValueTypeEnumStringValue     DocumentAttributeValueTypeEnum = "STRING_VALUE"
	DocumentAttributeValueTypeEnumStringListValue DocumentAttributeValueTypeEnum = "STRING_LIST_VALUE"
	DocumentAttributeValueTypeEnumLongValue       DocumentAttributeValueTypeEnum = "LONG_VALUE"
	DocumentAttributeValueTypeEnumDateValue       DocumentAttributeValueTypeEnum = "DATE_VALUE"
)
