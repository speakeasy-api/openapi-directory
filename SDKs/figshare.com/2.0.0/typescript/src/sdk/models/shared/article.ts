import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timeline } from "./timeline";



export class Article extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defined_type" })
  definedType?: number;

  @SpeakeasyMetadata({ data: "json, name=defined_type_name" })
  definedTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

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
}
