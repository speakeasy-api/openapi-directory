import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meaning" })
  meaning?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=transliteration" })
  transliteration?: string;

  @SpeakeasyMetadata({ data: "json, name=verse_number" })
  verseNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=word_meanings" })
  wordMeanings?: string;
}
