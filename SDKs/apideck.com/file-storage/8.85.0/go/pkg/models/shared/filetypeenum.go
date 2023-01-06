package shared

type FileTypeEnum string

const (
	FileTypeEnumFile   FileTypeEnum = "file"
	FileTypeEnumFolder FileTypeEnum = "folder"
	FileTypeEnumURL    FileTypeEnum = "url"
)
