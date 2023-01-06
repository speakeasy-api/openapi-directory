package shared

// GeoRestriction1
// A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
type GeoRestriction1 struct {
	Items           map[string]interface{}
	Quantity        int64
	RestrictionType GeoRestrictionTypeEnum
}
