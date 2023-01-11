import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ArticleEmbargoUpdaterEmbargoTypeEnum {
    Article = "article",
    File = "file"
}


export class ArticleEmbargoUpdater extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embargo_date" })
  embargoDate: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_options" })
  embargoOptions?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=embargo_reason" })
  embargoReason?: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_title" })
  embargoTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_type" })
  embargoType: ArticleEmbargoUpdaterEmbargoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=is_embargoed" })
  isEmbargoed: boolean;
}
