// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DefineIndexFieldRequest - Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.
type DefineIndexFieldRequest struct {
	// A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
	DomainName string
	IndexField IndexField
}
