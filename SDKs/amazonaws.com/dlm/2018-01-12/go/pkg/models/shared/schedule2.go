package shared

// Schedule2
// Specifies a backup schedule for a snapshot or AMI lifecycle policy.
type Schedule2 struct {
	CopyTags             *bool                  `json:"CopyTags,omitempty"`
	CreateRule           *CreateRule            `json:"CreateRule,omitempty"`
	CrossRegionCopyRules []CrossRegionCopyRule1 `json:"CrossRegionCopyRules,omitempty"`
	DeprecateRule        *DeprecateRule         `json:"DeprecateRule,omitempty"`
	FastRestoreRule      *FastRestoreRule       `json:"FastRestoreRule,omitempty"`
	Name                 *string                `json:"Name,omitempty"`
	RetainRule           *RetainRule            `json:"RetainRule,omitempty"`
	ShareRules           []ShareRule            `json:"ShareRules,omitempty"`
	TagsToAdd            []Tag                  `json:"TagsToAdd,omitempty"`
	VariableTags         []Tag                  `json:"VariableTags,omitempty"`
}
