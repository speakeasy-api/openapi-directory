package shared

// Schedule1
// Specifies a backup schedule for a snapshot or AMI lifecycle policy.
type Schedule1 struct {
	CopyTags             *bool                  `json:"CopyTags,omitempty"`
	CreateRule           *CreateRule            `json:"CreateRule,omitempty"`
	CrossRegionCopyRules []CrossRegionCopyRule1 `json:"CrossRegionCopyRules,omitempty"`
	DeprecateRule        *DeprecateRule1        `json:"DeprecateRule,omitempty"`
	FastRestoreRule      *FastRestoreRule       `json:"FastRestoreRule,omitempty"`
	Name                 *string                `json:"Name,omitempty"`
	RetainRule           *RetainRule            `json:"RetainRule,omitempty"`
	ShareRules           []ShareRule            `json:"ShareRules,omitempty"`
	TagsToAdd            []Tag                  `json:"TagsToAdd,omitempty"`
	VariableTags         []Tag                  `json:"VariableTags,omitempty"`
}
