package shared

// AccessDescription1
// Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.
type AccessDescription1 struct {
	AccessLocation GeneralName1 `json:"AccessLocation"`
	AccessMethod   AccessMethod `json:"AccessMethod"`
}
