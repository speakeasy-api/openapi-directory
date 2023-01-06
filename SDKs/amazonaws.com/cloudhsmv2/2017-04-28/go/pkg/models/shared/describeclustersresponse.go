package shared

type DescribeClustersResponse struct {
	Clusters  []Cluster1 `json:"Clusters,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
}
