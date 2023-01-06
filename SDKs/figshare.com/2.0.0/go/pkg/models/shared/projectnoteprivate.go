package shared

type ProjectNotePrivate struct {
	Abstract     *string `json:"abstract,omitempty"`
	CreatedDate  *string `json:"created_date,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	ModifiedDate *string `json:"modified_date,omitempty"`
	UserID       *int64  `json:"user_id,omitempty"`
	UserName     *string `json:"user_name,omitempty"`
}
