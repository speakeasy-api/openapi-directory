package shared

type MessageAttributeValue struct {
	BinaryListValues map[string]interface{}
	BinaryValue      *string
	DataType         *string
	StringListValues map[string]interface{}
	StringValue      *string
}
