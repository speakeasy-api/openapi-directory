package shared

type ChapterSchema struct {
	ChapterNumber      *int32  `json:"chapter_number,omitempty"`
	ChapterSummary     *string `json:"chapter_summary,omitempty"`
	Name               *string `json:"name,omitempty"`
	NameMeaning        *string `json:"name_meaning,omitempty"`
	NameTranslation    *string `json:"name_translation,omitempty"`
	NameTransliterated *string `json:"name_transliterated,omitempty"`
	VersesCount        *int32  `json:"verses_count,omitempty"`
}
