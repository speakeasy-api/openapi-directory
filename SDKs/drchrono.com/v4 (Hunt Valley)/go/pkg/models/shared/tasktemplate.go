package shared

type TaskTemplateDefaultPriorityEnum string

const (
	TaskTemplateDefaultPriorityEnumTen    TaskTemplateDefaultPriorityEnum = "10"
	TaskTemplateDefaultPriorityEnumTwenty TaskTemplateDefaultPriorityEnum = "20"
	TaskTemplateDefaultPriorityEnumThirty TaskTemplateDefaultPriorityEnum = "30"
	TaskTemplateDefaultPriorityEnumForty  TaskTemplateDefaultPriorityEnum = "40"
)

type TaskTemplate struct {
	Archived             *bool                            `json:"archived,omitempty"`
	CreatedAt            *string                          `json:"created_at,omitempty"`
	DefaultAssigneeGroup *int64                           `json:"default_assignee_group,omitempty"`
	DefaultAssigneeUser  *string                          `json:"default_assignee_user,omitempty"`
	DefaultCategory      *int64                           `json:"default_category,omitempty"`
	DefaultDueDateOffset *string                          `json:"default_due_date_offset,omitempty"`
	DefaultNote          *string                          `json:"default_note,omitempty"`
	DefaultPriority      *TaskTemplateDefaultPriorityEnum `json:"default_priority,omitempty"`
	DefaultStatus        *int64                           `json:"default_status,omitempty"`
	DefaultTitle         *string                          `json:"default_title,omitempty"`
	ID                   *int64                           `json:"id,omitempty"`
	Name                 string                           `json:"name"`
	PracticeGroup        *string                          `json:"practice_group,omitempty"`
	UpdatedAt            *string                          `json:"updated_at,omitempty"`
}
