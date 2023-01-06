package shared

type TaskAssociatedTaskItemTypeEnum string

const (
	TaskAssociatedTaskItemTypeEnumPatient       TaskAssociatedTaskItemTypeEnum = "Patient"
	TaskAssociatedTaskItemTypeEnumAppointment   TaskAssociatedTaskItemTypeEnum = "Appointment"
	TaskAssociatedTaskItemTypeEnumLabOrder      TaskAssociatedTaskItemTypeEnum = "Lab order"
	TaskAssociatedTaskItemTypeEnumDocument      TaskAssociatedTaskItemTypeEnum = "Document"
	TaskAssociatedTaskItemTypeEnumMessage       TaskAssociatedTaskItemTypeEnum = "Message"
	TaskAssociatedTaskItemTypeEnumLabDocument   TaskAssociatedTaskItemTypeEnum = "Lab document"
	TaskAssociatedTaskItemTypeEnumLabResult     TaskAssociatedTaskItemTypeEnum = "Lab result"
	TaskAssociatedTaskItemTypeEnumCommunication TaskAssociatedTaskItemTypeEnum = "Communication"
)

type TaskAssociatedTaskItem struct {
	Task  *int64                          `json:"task,omitempty"`
	Type  *TaskAssociatedTaskItemTypeEnum `json:"type,omitempty"`
	Value *int64                          `json:"value,omitempty"`
}

// TaskTaskReminder
// When the task is due
type TaskTaskReminder struct {
	Time *string `json:"time,omitempty"`
}

// TaskTaskNote
// Task note object
type TaskTaskNote struct {
	Archived  *bool   `json:"archived,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	Task      *int64  `json:"task,omitempty"`
	Text      *string `json:"text,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

type TaskPriorityEnum string

const (
	TaskPriorityEnumTen    TaskPriorityEnum = "10"
	TaskPriorityEnumTwenty TaskPriorityEnum = "20"
	TaskPriorityEnumThirty TaskPriorityEnum = "30"
	TaskPriorityEnumForty  TaskPriorityEnum = "40"
)

type Task struct {
	Archived        *bool                    `json:"archived,omitempty"`
	AssignedBy      *string                  `json:"assigned_by,omitempty"`
	AssigneeGroup   *int64                   `json:"assignee_group,omitempty"`
	AssigneeUser    *string                  `json:"assignee_user,omitempty"`
	AssociatedItems []TaskAssociatedTaskItem `json:"associated_items,omitempty"`
	Category        *int64                   `json:"category,omitempty"`
	CreatedAt       *string                  `json:"created_at,omitempty"`
	CreatedBy       *string                  `json:"created_by,omitempty"`
	DueDate         *TaskTaskReminder        `json:"due_date,omitempty"`
	ID              *int64                   `json:"id,omitempty"`
	Notes           []TaskTaskNote           `json:"notes,omitempty"`
	Priority        *TaskPriorityEnum        `json:"priority,omitempty"`
	Status          int64                    `json:"status"`
	Title           string                   `json:"title"`
	UpdatedAt       *string                  `json:"updated_at,omitempty"`
}
