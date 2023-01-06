package shared

// GoogleClassroomCoursework
// A coursework on Google Classroom
type GoogleClassroomCoursework struct {
	AlternateLink *string `json:"alternateLink,omitempty"`
	ID            *string `json:"id,omitempty"`
	State         *string `json:"state,omitempty"`
	TopicID       *string `json:"topicId,omitempty"`
}
