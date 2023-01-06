package shared

type AssociateCustomDomainRequest struct {
	DomainName         string `json:"DomainName"`
	EnableWWWSubdomain *bool  `json:"EnableWWWSubdomain,omitempty"`
	ServiceArn         string `json:"ServiceArn"`
}
