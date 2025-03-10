// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CrawlerTargets - Specifies data stores to crawl.
type CrawlerTargets struct {
	CatalogTargets  []CatalogTarget  `json:"CatalogTargets,omitempty"`
	DeltaTargets    []DeltaTarget    `json:"DeltaTargets,omitempty"`
	DynamoDBTargets []DynamoDBTarget `json:"DynamoDBTargets,omitempty"`
	JdbcTargets     []JdbcTarget     `json:"JdbcTargets,omitempty"`
	MongoDBTargets  []MongoDBTarget  `json:"MongoDBTargets,omitempty"`
	S3Targets       []S3Target       `json:"S3Targets,omitempty"`
}
