package shared

type Activity1 struct {
	CUSTOM           *CustomMessageActivity         `json:"CUSTOM,omitempty"`
	ConditionalSplit *ConditionalSplitActivity      `json:"ConditionalSplit,omitempty"`
	Description      *string                        `json:"Description,omitempty"`
	EMAIL            *EmailMessageActivity          `json:"EMAIL,omitempty"`
	Holdout          *HoldoutActivity1              `json:"Holdout,omitempty"`
	MultiCondition   *MultiConditionalSplitActivity `json:"MultiCondition,omitempty"`
	PUSH             *PushMessageActivity           `json:"PUSH,omitempty"`
	RandomSplit      *RandomSplitActivity           `json:"RandomSplit,omitempty"`
	SMS              *SmsMessageActivity            `json:"SMS,omitempty"`
	Wait             *WaitActivity                  `json:"Wait,omitempty"`
}
