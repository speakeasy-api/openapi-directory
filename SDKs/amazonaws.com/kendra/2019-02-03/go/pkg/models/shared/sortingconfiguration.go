package shared

// SortingConfiguration
// <p>Specifies the document attribute to use to sort the response to a Amazon Kendra query. You can specify a single attribute for sorting. The attribute must have the <code>Sortable</code> flag set to <code>true</code>, otherwise Amazon Kendra returns an exception.</p> <p>You can sort attributes of the following types.</p> <ul> <li> <p>Date value</p> </li> <li> <p>Long value</p> </li> <li> <p>String value</p> </li> </ul> <p>You can't sort attributes of the following type.</p> <ul> <li> <p>String list value</p> </li> </ul>
type SortingConfiguration struct {
	DocumentAttributeKey string        `json:"DocumentAttributeKey"`
	SortOrder            SortOrderEnum `json:"SortOrder"`
}
