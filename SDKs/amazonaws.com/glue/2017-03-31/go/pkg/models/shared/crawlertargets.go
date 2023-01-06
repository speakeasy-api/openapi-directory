package shared

// CrawlerTargets
// Specifies data stores to crawl.
type CrawlerTargets struct {
	CatalogTargets  []CatalogTarget  `json:"CatalogTargets,omitempty"`
	DynamoDBTargets []DynamoDbTarget `json:"DynamoDBTargets,omitempty"`
	JdbcTargets     []JdbcTarget     `json:"JdbcTargets,omitempty"`
	MongoDBTargets  []MongoDbTarget  `json:"MongoDBTargets,omitempty"`
	S3Targets       []S3Target       `json:"S3Targets,omitempty"`
}
