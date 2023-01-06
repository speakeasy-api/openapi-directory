package shared

type AutomaticTransitionInfoList struct {
	AutomaticTransitionInfos []AutomaticTransitionInfo        `json:"automaticTransitionInfos,omitempty"`
	Links                    AutomaticTransitionInfoListLinks `json:"links"`
}
