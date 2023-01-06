package shared

type Exclusion struct {
	Arn            *string     `json:"arn,omitempty"`
	Attributes     []Attribute `json:"attributes,omitempty"`
	Description    *string     `json:"description,omitempty"`
	Recommendation *string     `json:"recommendation,omitempty"`
	Scopes         []Scope     `json:"scopes,omitempty"`
	Title          *string     `json:"title,omitempty"`
}
