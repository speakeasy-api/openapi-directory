package shared

// Extras
// Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
type Extras struct {
	Push *Push `json:"push,omitempty"`
}
