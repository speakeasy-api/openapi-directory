package shared

type StoryResponseSourceEnum string

const (
	StoryResponseSourceEnumWeb     StoryResponseSourceEnum = "web"
	StoryResponseSourceEnumEmail   StoryResponseSourceEnum = "email"
	StoryResponseSourceEnumMobile  StoryResponseSourceEnum = "mobile"
	StoryResponseSourceEnumAPI     StoryResponseSourceEnum = "api"
	StoryResponseSourceEnumUnknown StoryResponseSourceEnum = "unknown"
)

// StoryResponse
// A story represents an activity associated with an object in the Asana system.
type StoryResponse struct {
	Assignee           *UserCompact             `json:"assignee,omitempty"`
	CreatedBy          *UserCompact             `json:"created_by,omitempty"`
	CustomField        *CustomFieldCompact      `json:"custom_field,omitempty"`
	Dependency         *TaskCompact             `json:"dependency,omitempty"`
	DuplicateOf        *TaskCompact             `json:"duplicate_of,omitempty"`
	DuplicatedFrom     *TaskCompact             `json:"duplicated_from,omitempty"`
	Follower           *UserCompact             `json:"follower,omitempty"`
	Hearted            *bool                    `json:"hearted,omitempty"`
	Hearts             []Like                   `json:"hearts,omitempty"`
	IsEdited           *bool                    `json:"is_edited,omitempty"`
	Liked              *bool                    `json:"liked,omitempty"`
	Likes              []Like                   `json:"likes,omitempty"`
	NewApprovalStatus  *string                  `json:"new_approval_status,omitempty"`
	NewDates           *StoryResponseDates      `json:"new_dates,omitempty"`
	NewEnumValue       *EnumOption              `json:"new_enum_value,omitempty"`
	NewMultiEnumValues []EnumOption             `json:"new_multi_enum_values,omitempty"`
	NewName            *string                  `json:"new_name,omitempty"`
	NewNumberValue     *int64                   `json:"new_number_value,omitempty"`
	NewResourceSubtype *string                  `json:"new_resource_subtype,omitempty"`
	NewSection         *SectionCompact          `json:"new_section,omitempty"`
	NewTextValue       *string                  `json:"new_text_value,omitempty"`
	NumHearts          *int64                   `json:"num_hearts,omitempty"`
	NumLikes           *int64                   `json:"num_likes,omitempty"`
	OldApprovalStatus  *string                  `json:"old_approval_status,omitempty"`
	OldDates           *StoryResponseDates      `json:"old_dates,omitempty"`
	OldEnumValue       *EnumOption              `json:"old_enum_value,omitempty"`
	OldMultiEnumValues []EnumOption             `json:"old_multi_enum_values,omitempty"`
	OldName            *string                  `json:"old_name,omitempty"`
	OldNumberValue     *int64                   `json:"old_number_value,omitempty"`
	OldResourceSubtype *string                  `json:"old_resource_subtype,omitempty"`
	OldSection         *SectionCompact          `json:"old_section,omitempty"`
	OldTextValue       *string                  `json:"old_text_value,omitempty"`
	Previews           []Preview                `json:"previews,omitempty"`
	Project            *ProjectCompact          `json:"project,omitempty"`
	Source             *StoryResponseSourceEnum `json:"source,omitempty"`
	Story              *StoryCompact            `json:"story,omitempty"`
	Tag                *TagCompact              `json:"tag,omitempty"`
	Target             *interface{}             `json:"target,omitempty"`
	Task               *TaskCompact             `json:"task,omitempty"`
}
