package shared

type FilesSortByEnum string

const (
	FilesSortByEnumUpdatedAt FilesSortByEnum = "updated_at"
	FilesSortByEnumName      FilesSortByEnum = "name"
)

type FilesSort struct {
	By        *FilesSortByEnum   `queryParam:"name=by"`
	Direction *SortDirectionEnum `queryParam:"name=direction"`
}
