package shared

// DNSProperties
// A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
type DNSProperties struct {
	HostedZoneID *string `json:"HostedZoneId,omitempty"`
	SOA          *Soa    `json:"SOA,omitempty"`
}
