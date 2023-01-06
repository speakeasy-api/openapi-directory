package shared

type TaskStatusStatusCategoryEnum string

const (
	TaskStatusStatusCategoryEnumO TaskStatusStatusCategoryEnum = "O"
	TaskStatusStatusCategoryEnumP TaskStatusStatusCategoryEnum = "P"
	TaskStatusStatusCategoryEnumH TaskStatusStatusCategoryEnum = "H"
	TaskStatusStatusCategoryEnumC TaskStatusStatusCategoryEnum = "C"
)

type TaskStatus struct {
	Archived       *bool                         `json:"archived,omitempty"`
	CreatedAt      *string                       `json:"created_at,omitempty"`
	ID             *int64                        `json:"id,omitempty"`
	Name           string                        `json:"name"`
	PracticeGroup  int64                         `json:"practice_group"`
	StatusCategory *TaskStatusStatusCategoryEnum `json:"status_category,omitempty"`
	TaskCategory   *int64                        `json:"task_category,omitempty"`
	UpdatedAt      *string                       `json:"updated_at,omitempty"`
}
