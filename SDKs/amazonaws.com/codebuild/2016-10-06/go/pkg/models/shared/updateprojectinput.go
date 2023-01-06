package shared

// UpdateProjectInputArtifacts
// Information about the build output artifacts for the build project.
type UpdateProjectInputArtifacts struct {
	ArtifactIdentifier   *string                `json:"artifactIdentifier,omitempty"`
	BucketOwnerAccess    *BucketOwnerAccessEnum `json:"bucketOwnerAccess,omitempty"`
	EncryptionDisabled   *bool                  `json:"encryptionDisabled,omitempty"`
	Location             *string                `json:"location,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	NamespaceType        *ArtifactNamespaceEnum `json:"namespaceType,omitempty"`
	OverrideArtifactName *bool                  `json:"overrideArtifactName,omitempty"`
	Packaging            *ArtifactPackagingEnum `json:"packaging,omitempty"`
	Path                 *string                `json:"path,omitempty"`
	Type                 ArtifactsTypeEnum      `json:"type"`
}

type UpdateProjectInput struct {
	Artifacts               *UpdateProjectInputArtifacts `json:"artifacts,omitempty"`
	BadgeEnabled            *bool                        `json:"badgeEnabled,omitempty"`
	BuildBatchConfig        *ProjectBuildBatchConfig     `json:"buildBatchConfig,omitempty"`
	Cache                   *ProjectCache                `json:"cache,omitempty"`
	ConcurrentBuildLimit    *int64                       `json:"concurrentBuildLimit,omitempty"`
	Description             *string                      `json:"description,omitempty"`
	EncryptionKey           *string                      `json:"encryptionKey,omitempty"`
	Environment             *ProjectEnvironment          `json:"environment,omitempty"`
	FileSystemLocations     []ProjectFileSystemLocation  `json:"fileSystemLocations,omitempty"`
	LogsConfig              *LogsConfig1                 `json:"logsConfig,omitempty"`
	Name                    string                       `json:"name"`
	QueuedTimeoutInMinutes  *int64                       `json:"queuedTimeoutInMinutes,omitempty"`
	SecondaryArtifacts      []ProjectArtifacts           `json:"secondaryArtifacts,omitempty"`
	SecondarySourceVersions []ProjectSourceVersion       `json:"secondarySourceVersions,omitempty"`
	SecondarySources        []ProjectSource              `json:"secondarySources,omitempty"`
	ServiceRole             *string                      `json:"serviceRole,omitempty"`
	Source                  *ProjectSource               `json:"source,omitempty"`
	SourceVersion           *string                      `json:"sourceVersion,omitempty"`
	Tags                    []Tag                        `json:"tags,omitempty"`
	TimeoutInMinutes        *int64                       `json:"timeoutInMinutes,omitempty"`
	VpcConfig               *VpcConfig                   `json:"vpcConfig,omitempty"`
}
