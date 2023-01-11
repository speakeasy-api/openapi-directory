import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FundingInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=funder_name" })
  funderName?: string;

  @SpeakeasyMetadata({ data: "json, name=grant_code" })
  grantCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_user_defined" })
  isUserDefined?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
