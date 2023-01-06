package shared

type LinksTopDomains struct {
	Domain              string                   `json:"domain"`
	FollowLinks         int64                    `json:"follow_links"`
	FollowSamples       []LinksTopDomainsSamples `json:"follow_samples"`
	NofollowLinks       int64                    `json:"nofollow_links"`
	NofollowSamples     []LinksTopDomainsSamples `json:"nofollow_samples"`
	UniqueFollowLinks   int64                    `json:"unique_follow_links"`
	UniqueNofollowLinks int64                    `json:"unique_nofollow_links"`
}
