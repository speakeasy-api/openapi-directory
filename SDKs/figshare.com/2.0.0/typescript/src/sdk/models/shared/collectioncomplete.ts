import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
import { Category } from "./category";
import { CustomArticleField } from "./customarticlefield";
import { FundingInformation } from "./fundinginformation";
import { Timeline } from "./timeline";



export class CollectionComplete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=articles_count" })
  articlesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=authors", elemType: Author })
  authors?: Author[];

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=citation" })
  citation?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomArticleField })
  customFields?: CustomArticleField[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=funding", elemType: FundingInformation })
  funding?: FundingInformation[];

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=group_resource_id" })
  groupResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_doi" })
  resourceDoi?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_link" })
  resourceLink?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_title" })
  resourceTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_version" })
  resourceVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeline" })
  timeline?: Timeline;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
