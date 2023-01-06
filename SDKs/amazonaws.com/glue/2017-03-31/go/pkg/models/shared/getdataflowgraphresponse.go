package shared

type GetDataflowGraphResponse struct {
	DagEdges []CodeGenEdge1 `json:"DagEdges,omitempty"`
	DagNodes []CodeGenNode  `json:"DagNodes,omitempty"`
}
