package shared

type DisassociateCustomDomainResponse struct {
	CustomDomain CustomDomain1 `json:"CustomDomain"`
	DNSTarget    string        `json:"DNSTarget"`
	ServiceArn   string        `json:"ServiceArn"`
}
