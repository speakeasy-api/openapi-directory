import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingCreate } from "./fundingcreate";
import { TimelineUpdate } from "./timelineupdate";



export class ArticleCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authors" })
  authors?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: number[];

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=defined_type" })
  definedType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=funding" })
  funding?: string;

  @SpeakeasyMetadata({ data: "json, name=funding_list", elemType: FundingCreate })
  fundingList?: FundingCreate[];

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: number;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_doi" })
  resourceDoi?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_title" })
  resourceTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeline" })
  timeline?: TimelineUpdate;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
