import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateEnclaveCertificateIamRoleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateS3BucketName?: Record<string, any>;

  @SpeakeasyMetadata()
  certificateS3ObjectKey?: Record<string, any>;

  @SpeakeasyMetadata()
  encryptionKmsKeyId?: Record<string, any>;
}
