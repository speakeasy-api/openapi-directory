import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UploadSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=parallel_upload_supported" })
  parallelUploadSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=part_size" })
  partSize?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uploaded_byte_range" })
  uploadedByteRange?: string;
}
