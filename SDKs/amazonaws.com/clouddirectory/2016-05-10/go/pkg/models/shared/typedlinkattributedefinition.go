package shared

import (
	"time"
)

// TypedLinkAttributeDefinitionDefaultValue
// Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
type TypedLinkAttributeDefinitionDefaultValue struct {
	BinaryValue   *string    `json:"BinaryValue,omitempty"`
	BooleanValue  *bool      `json:"BooleanValue,omitempty"`
	DatetimeValue *time.Time `json:"DatetimeValue,omitempty"`
	NumberValue   *string    `json:"NumberValue,omitempty"`
	StringValue   *string    `json:"StringValue,omitempty"`
}

// TypedLinkAttributeDefinition
// A typed link attribute definition.
type TypedLinkAttributeDefinition struct {
	DefaultValue     *TypedLinkAttributeDefinitionDefaultValue `json:"DefaultValue,omitempty"`
	IsImmutable      *bool                                     `json:"IsImmutable,omitempty"`
	Name             string                                    `json:"Name"`
	RequiredBehavior RequiredAttributeBehaviorEnum             `json:"RequiredBehavior"`
	Rules            map[string]Rule                           `json:"Rules,omitempty"`
	Type             FacetAttributeTypeEnum                    `json:"Type"`
}
