import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChapterSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chapter_number" })
  chapterNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=chapter_summary" })
  chapterSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=name_meaning" })
  nameMeaning?: string;

  @SpeakeasyMetadata({ data: "json, name=name_translation" })
  nameTranslation?: string;

  @SpeakeasyMetadata({ data: "json, name=name_transliterated" })
  nameTransliterated?: string;

  @SpeakeasyMetadata({ data: "json, name=verses_count" })
  versesCount?: number;
}
