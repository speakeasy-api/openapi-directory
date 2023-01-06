package shared

// Listener1
// Information about a listener.
type Listener1 struct {
	AlpnPolicy      []string
	Certificates    []Certificate
	DefaultActions  []Action1
	ListenerArn     *string
	LoadBalancerArn *string
	Port            *int64
	Protocol        *ProtocolEnumEnum
	SslPolicy       *string
}
