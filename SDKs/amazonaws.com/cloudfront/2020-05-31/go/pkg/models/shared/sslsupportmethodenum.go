package shared

type SslSupportMethodEnum string

const (
	SSLSupportMethodEnumSniOnly  SslSupportMethodEnum = "sni-only"
	SSLSupportMethodEnumVip      SslSupportMethodEnum = "vip"
	SSLSupportMethodEnumStaticIP SslSupportMethodEnum = "static-ip"
)
