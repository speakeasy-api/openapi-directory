package shared

// AttributeList
// A name value pair that describes an aspect of an account.
type AttributeList struct {
	AttributeName   *string
	AttributeValues []AttributeValueList
}
