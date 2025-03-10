// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DescribeDomainEndpointOptionsRequest - Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.
type DescribeDomainEndpointOptionsRequest struct {
	Deployed   *bool
	DomainName string
}
