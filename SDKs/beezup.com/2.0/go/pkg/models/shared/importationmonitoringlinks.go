package shared

// ImportationMonitoringLinks
// Applicable operations considering the state of the importation
type ImportationMonitoringLinks struct {
	ActivateAutoImport               map[string]interface{} `json:"activateAutoImport,omitempty"`
	Cancel                           map[string]interface{} `json:"cancel,omitempty"`
	CatalogColumns                   map[string]interface{} `json:"catalogColumns,omitempty"`
	Commit                           map[string]interface{} `json:"commit,omitempty"`
	CommitColumns                    map[string]interface{} `json:"commitColumns,omitempty"`
	ConfigureRemainingCatalogColumns map[string]interface{} `json:"configureRemainingCatalogColumns,omitempty"`
	CustomColumns                    map[string]interface{} `json:"customColumns,omitempty"`
	ProductSamples                   map[string]interface{} `json:"productSamples,omitempty"`
	Self                             map[string]interface{} `json:"self"`
	TechnicalProgression             map[string]interface{} `json:"technicalProgression"`
}
