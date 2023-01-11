import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changePassword" })
  changePassword: boolean;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleteFormData" })
  deleteFormData: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: boolean;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list: boolean;

  @SpeakeasyMetadata({ data: "json, name=modify" })
  modify: boolean;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification: boolean;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share: boolean;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload: boolean;

  @SpeakeasyMetadata({ data: "json, name=viewFormData" })
  viewFormData: boolean;
}
