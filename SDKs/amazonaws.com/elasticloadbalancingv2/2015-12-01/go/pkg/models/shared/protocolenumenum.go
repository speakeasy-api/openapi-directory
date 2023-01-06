package shared

type ProtocolEnumEnum string

const (
	ProtocolEnumEnumHTTP   ProtocolEnumEnum = "HTTP"
	ProtocolEnumEnumHTTPS  ProtocolEnumEnum = "HTTPS"
	ProtocolEnumEnumTCP    ProtocolEnumEnum = "TCP"
	ProtocolEnumEnumTLS    ProtocolEnumEnum = "TLS"
	ProtocolEnumEnumUDP    ProtocolEnumEnum = "UDP"
	ProtocolEnumEnumTCPUDP ProtocolEnumEnum = "TCP_UDP"
	ProtocolEnumEnumGeneve ProtocolEnumEnum = "GENEVE"
)
