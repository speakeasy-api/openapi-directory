// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent struct {
	Collectibles map[string]DestinyComponentsCollectiblesDestinyCollectibleComponent
	// The hash for the root presentation node definition of Collection Badges.
	CollectionBadgesRootNodeHash *int64
	// The hash for the root presentation node definition of Collection categories.
	CollectionCategoriesRootNodeHash *int64
	// The list of collectibles determined by the game as having been "recently" acquired.
	// The game client itself actually controls this data, so I personally question whether anyone will get much use out of this: because we can't edit this value through the API. But in case anyone finds it useful, here it is.
	NewnessFlaggedCollectibleHashes []int64
	// The list of collectibles determined by the game as having been "recently" acquired.
	RecentCollectibleHashes []int64
}
