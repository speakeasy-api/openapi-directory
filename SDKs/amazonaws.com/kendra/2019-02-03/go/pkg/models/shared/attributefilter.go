package shared

// AttributeFilter
// <p>Provides filtering the query results based on document attributes.</p> <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you can use 2 layers under the first attribute filter. For example, you can use:</p> <p> <code>&lt;AndAllFilters&gt;</code> </p> <ol> <li> <p> <code> &lt;OrAllFilters&gt;</code> </p> </li> <li> <p> <code> &lt;EqualTo&gt;</code> </p> </li> </ol> <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p> <p>If you use more than 10 attribute filters, you receive a <code>ValidationException</code> exception with the message "<code>AttributeFilter</code> cannot have a length of more than 10".</p>
type AttributeFilter struct {
	AndAllFilters       []AttributeFilter  `json:"AndAllFilters,omitempty"`
	ContainsAll         *DocumentAttribute `json:"ContainsAll,omitempty"`
	ContainsAny         *DocumentAttribute `json:"ContainsAny,omitempty"`
	EqualsTo            *DocumentAttribute `json:"EqualsTo,omitempty"`
	GreaterThan         *DocumentAttribute `json:"GreaterThan,omitempty"`
	GreaterThanOrEquals *DocumentAttribute `json:"GreaterThanOrEquals,omitempty"`
	LessThan            *DocumentAttribute `json:"LessThan,omitempty"`
	LessThanOrEquals    *DocumentAttribute `json:"LessThanOrEquals,omitempty"`
	NotFilter           *AttributeFilter   `json:"NotFilter,omitempty"`
	OrAllFilters        []AttributeFilter  `json:"OrAllFilters,omitempty"`
}
