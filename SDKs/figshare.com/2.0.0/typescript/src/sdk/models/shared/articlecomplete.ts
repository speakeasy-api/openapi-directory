import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
import { Category } from "./category";
import { CustomArticleField } from "./customarticlefield";
import { GroupEmbargoOptions } from "./groupembargooptions";
import { PublicFile } from "./publicfile";
import { License } from "./license";
import { Timeline } from "./timeline";



export class ArticleComplete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authors", elemType: Author })
  authors?: Author[];

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=citation" })
  citation?: string;

  @SpeakeasyMetadata({ data: "json, name=confidential_reason" })
  confidentialReason?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomArticleField })
  customFields?: CustomArticleField[];

  @SpeakeasyMetadata({ data: "json, name=defined_type" })
  definedType?: number;

  @SpeakeasyMetadata({ data: "json, name=defined_type_name" })
  definedTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_date" })
  embargoDate?: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_options", elemType: GroupEmbargoOptions })
  embargoOptions?: GroupEmbargoOptions[];

  @SpeakeasyMetadata({ data: "json, name=embargo_reason" })
  embargoReason?: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_title" })
  embargoTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=embargo_type" })
  embargoType?: string;

  @SpeakeasyMetadata({ data: "json, name=figshare_url" })
  figshareUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: PublicFile })
  files?: PublicFile[];

  @SpeakeasyMetadata({ data: "json, name=funding" })
  funding?: string;

  @SpeakeasyMetadata({ data: "json, name=funding_list" })
  fundingList?: number[];

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "json, name=has_linked_file" })
  hasLinkedFile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_confidential" })
  isConfidential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_embargoed" })
  isEmbargoed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_metadata_record" })
  isMetadataRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: License;

  @SpeakeasyMetadata({ data: "json, name=metadata_reason" })
  metadataReason?: string;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=references" })
  references?: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_doi" })
  resourceDoi?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_title" })
  resourceTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumb" })
  thumb?: string;

  @SpeakeasyMetadata({ data: "json, name=timeline" })
  timeline?: Timeline;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=url_private_api" })
  urlPrivateApi?: string;

  @SpeakeasyMetadata({ data: "json, name=url_private_html" })
  urlPrivateHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=url_public_api" })
  urlPublicApi?: string;

  @SpeakeasyMetadata({ data: "json, name=url_public_html" })
  urlPublicHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
