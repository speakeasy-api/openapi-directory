package shared

type VideosSearchSortEnum string

const (
	VideosSearchSortEnumName             VideosSearchSortEnum = "name"
	VideosSearchSortEnumMinusDuration    VideosSearchSortEnum = "-duration"
	VideosSearchSortEnumMinusCreatedAt   VideosSearchSortEnum = "-createdAt"
	VideosSearchSortEnumMinusPublishedAt VideosSearchSortEnum = "-publishedAt"
	VideosSearchSortEnumMinusViews       VideosSearchSortEnum = "-views"
	VideosSearchSortEnumMinusLikes       VideosSearchSortEnum = "-likes"
	VideosSearchSortEnumMinusMatch       VideosSearchSortEnum = "-match"
)
