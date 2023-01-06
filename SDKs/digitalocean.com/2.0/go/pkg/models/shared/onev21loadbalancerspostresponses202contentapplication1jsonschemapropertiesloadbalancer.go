package shared

// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion
// The region where the load balancer instance is located. When setting a region, the value should be the slug identifier for the region. When you query a load balancer, an entire region object will be returned.
type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer struct {
	Region *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion `json:"region,omitempty"`
}
