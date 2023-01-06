package shared

type CurationDetailStatusEnum string

const (
	CurationDetailStatusEnumPending  CurationDetailStatusEnum = "pending"
	CurationDetailStatusEnumApproved CurationDetailStatusEnum = "approved"
	CurationDetailStatusEnumRejected CurationDetailStatusEnum = "rejected"
	CurationDetailStatusEnumClosed   CurationDetailStatusEnum = "closed"
)

type CurationDetail struct {
	AccountID     *int64                    `json:"account_id,omitempty"`
	ArticleID     *int64                    `json:"article_id,omitempty"`
	AssignedTo    *int64                    `json:"assigned_to,omitempty"`
	CommentsCount *int64                    `json:"comments_count,omitempty"`
	CreatedDate   *string                   `json:"created_date,omitempty"`
	GroupID       *int64                    `json:"group_id,omitempty"`
	ID            *int64                    `json:"id,omitempty"`
	ModifiedDate  *string                   `json:"modified_date,omitempty"`
	ReviewDate    *string                   `json:"review_date,omitempty"`
	Status        *CurationDetailStatusEnum `json:"status,omitempty"`
	Version       *int64                    `json:"version,omitempty"`
}
