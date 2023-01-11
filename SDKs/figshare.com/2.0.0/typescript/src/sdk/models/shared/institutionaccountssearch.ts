import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstitutionAccountsSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=institution_user_id" })
  institutionUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=search_for" })
  searchFor?: string;
}
