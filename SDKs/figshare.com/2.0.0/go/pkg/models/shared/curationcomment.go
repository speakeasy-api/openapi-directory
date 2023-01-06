package shared

type CurationCommentTypeEnum string

const (
	CurationCommentTypeEnumComment  CurationCommentTypeEnum = "comment"
	CurationCommentTypeEnumApproved CurationCommentTypeEnum = "approved"
	CurationCommentTypeEnumRejected CurationCommentTypeEnum = "rejected"
	CurationCommentTypeEnumClosed   CurationCommentTypeEnum = "closed"
)

type CurationComment struct {
	AccountID *int64                   `json:"account_id,omitempty"`
	ID        *int64                   `json:"id,omitempty"`
	Text      *string                  `json:"text,omitempty"`
	Type      *CurationCommentTypeEnum `json:"type,omitempty"`
}
