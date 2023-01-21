package shared

// AttributeValue
// <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
type AttributeValue struct {
	B    *string                   `json:"B,omitempty"`
	BOOL *bool                     `json:"BOOL,omitempty"`
	BS   []string                  `json:"BS,omitempty"`
	L    []AttributeValue          `json:"L,omitempty"`
	M    map[string]AttributeValue `json:"M,omitempty"`
	N    *string                   `json:"N,omitempty"`
	NS   []string                  `json:"NS,omitempty"`
	NULL *bool                     `json:"NULL,omitempty"`
	S    *string                   `json:"S,omitempty"`
	SS   []string                  `json:"SS,omitempty"`
}
