package shared

// Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel
// **Note**: All Droplets created after March 2017 use internal kernels by default.
// These Droplets will have this attribute set to `null`.
//
// The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
// for Droplets with externally managed kernels. This will initially be set to
// the kernel of the base image when the Droplet is created.
type Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel struct {
	ID      *int64  `json:"id,omitempty"`
	Name    *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}
