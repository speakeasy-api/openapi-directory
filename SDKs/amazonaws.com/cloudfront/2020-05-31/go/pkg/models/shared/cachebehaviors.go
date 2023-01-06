package shared

// CacheBehaviors
// A complex type that contains zero or more <code>CacheBehavior</code> elements.
type CacheBehaviors struct {
	Items    []map[string]interface{}
	Quantity int64
}
