package shared

// CopyOptimisationRequest
// Copy the optimisation between 2 channels
type CopyOptimisationRequest struct {
	ChannelIDSource          string `json:"channelIdSource"`
	ChannelIDTarget          string `json:"channelIdTarget"`
	KeepExistingOptimisation bool   `json:"keepExistingOptimisation"`
}
