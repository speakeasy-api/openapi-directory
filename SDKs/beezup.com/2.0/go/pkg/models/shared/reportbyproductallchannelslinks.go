package shared

type ReportByProductAllChannelsLinks struct {
	DisableProductForAllChannels LinksOptimiseByProductLink `json:"disableProductForAllChannels"`
	EnableProductForAllChannels  LinksOptimiseByProductLink `json:"enableProductForAllChannels"`
}
