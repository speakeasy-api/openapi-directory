package shared

type VerseSchema struct {
	Meaning         *string `json:"meaning,omitempty"`
	Text            *string `json:"text,omitempty"`
	Transliteration *string `json:"transliteration,omitempty"`
	VerseNumber     *string `json:"verse_number,omitempty"`
	WordMeanings    *string `json:"word_meanings,omitempty"`
}
