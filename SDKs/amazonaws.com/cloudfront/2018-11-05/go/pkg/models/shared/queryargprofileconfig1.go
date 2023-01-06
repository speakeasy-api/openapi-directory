package shared

// QueryArgProfileConfig1
// Configuration for query argument-profile mapping for field-level encryption.
type QueryArgProfileConfig1 struct {
	ForwardWhenQueryArgProfileIsUnknown bool
	QueryArgProfiles                    *QueryArgProfiles1
}
