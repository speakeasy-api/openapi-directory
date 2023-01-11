import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Author extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=orcid_id" })
  orcidId?: string;

  @SpeakeasyMetadata({ data: "json, name=url_name" })
  urlName?: string;
}
