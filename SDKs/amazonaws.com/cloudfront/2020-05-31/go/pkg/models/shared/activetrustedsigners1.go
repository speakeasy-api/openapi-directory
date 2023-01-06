package shared

// ActiveTrustedSigners1
// A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
type ActiveTrustedSigners1 struct {
	Enabled  bool
	Items    map[string]interface{}
	Quantity int64
}
