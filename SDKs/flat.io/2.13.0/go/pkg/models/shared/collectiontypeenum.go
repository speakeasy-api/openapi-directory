package shared

type CollectionTypeEnum string

const (
	CollectionTypeEnumRoot            CollectionTypeEnum = "root"
	CollectionTypeEnumRegular         CollectionTypeEnum = "regular"
	CollectionTypeEnumSharedWithMe    CollectionTypeEnum = "sharedWithMe"
	CollectionTypeEnumSharedWithGroup CollectionTypeEnum = "sharedWithGroup"
	CollectionTypeEnumTrash           CollectionTypeEnum = "trash"
)
