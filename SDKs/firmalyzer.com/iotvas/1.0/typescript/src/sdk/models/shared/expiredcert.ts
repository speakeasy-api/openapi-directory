import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExpiredCertPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=bits" })
  bits?: number;
}


export class ExpiredCert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_hash" })
  fileHash?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: ExpiredCertPublicKey;

  @SpeakeasyMetadata({ data: "json, name=subject_name" })
  subjectName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb_print" })
  thumbPrint?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_from" })
  validFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_to" })
  validTo?: string;
}
