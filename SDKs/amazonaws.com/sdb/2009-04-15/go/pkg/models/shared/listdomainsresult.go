package shared

type ListDomainsResult struct {
	DomainNames []map[string]interface{}
	NextToken   *string
}
