package shared

type ServiceTypeEnum string

const (
	ServiceTypeEnumHTTP    ServiceTypeEnum = "HTTP"
	ServiceTypeEnumDNSHTTP ServiceTypeEnum = "DNS_HTTP"
	ServiceTypeEnumDNS     ServiceTypeEnum = "DNS"
)
