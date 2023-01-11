import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivateFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computed_md5" })
  computedMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_link_only" })
  isLinkOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preview_state" })
  previewState?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=supplied_md5" })
  suppliedMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=upload_token" })
  uploadToken?: string;

  @SpeakeasyMetadata({ data: "json, name=upload_url" })
  uploadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=viewer_type" })
  viewerType?: string;
}
