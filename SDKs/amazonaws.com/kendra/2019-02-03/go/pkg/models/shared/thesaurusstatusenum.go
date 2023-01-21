package shared

type ThesaurusStatusEnum string

const (
	ThesaurusStatusEnumCreating              ThesaurusStatusEnum = "CREATING"
	ThesaurusStatusEnumActive                ThesaurusStatusEnum = "ACTIVE"
	ThesaurusStatusEnumDeleting              ThesaurusStatusEnum = "DELETING"
	ThesaurusStatusEnumUpdating              ThesaurusStatusEnum = "UPDATING"
	ThesaurusStatusEnumActiveButUpdateFailed ThesaurusStatusEnum = "ACTIVE_BUT_UPDATE_FAILED"
	ThesaurusStatusEnumFailed                ThesaurusStatusEnum = "FAILED"
)
