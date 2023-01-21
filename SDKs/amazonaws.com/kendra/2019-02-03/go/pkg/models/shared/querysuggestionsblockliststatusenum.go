package shared

type QuerySuggestionsBlockListStatusEnum string

const (
	QuerySuggestionsBlockListStatusEnumActive                QuerySuggestionsBlockListStatusEnum = "ACTIVE"
	QuerySuggestionsBlockListStatusEnumCreating              QuerySuggestionsBlockListStatusEnum = "CREATING"
	QuerySuggestionsBlockListStatusEnumDeleting              QuerySuggestionsBlockListStatusEnum = "DELETING"
	QuerySuggestionsBlockListStatusEnumUpdating              QuerySuggestionsBlockListStatusEnum = "UPDATING"
	QuerySuggestionsBlockListStatusEnumActiveButUpdateFailed QuerySuggestionsBlockListStatusEnum = "ACTIVE_BUT_UPDATE_FAILED"
	QuerySuggestionsBlockListStatusEnumFailed                QuerySuggestionsBlockListStatusEnum = "FAILED"
)
