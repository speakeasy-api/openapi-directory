package shared

// CacheEngineVersionList
// Provides all of the details about a particular cache engine version.
type CacheEngineVersionList struct {
	CacheEngineDescription        *string
	CacheEngineVersionDescription *string
	CacheParameterGroupFamily     *string
	Engine                        *string
	EngineVersion                 *string
}
