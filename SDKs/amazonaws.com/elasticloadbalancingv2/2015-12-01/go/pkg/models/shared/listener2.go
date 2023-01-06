package shared

// Listener2
// Information about a listener.
type Listener2 struct {
	AlpnPolicy      []string
	Certificates    []Certificate
	DefaultActions  []Action2
	ListenerArn     *string
	LoadBalancerArn *string
	Port            *int64
	Protocol        *ProtocolEnumEnum
	SslPolicy       *string
}
