import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbInstanceRoles
/** 
 * Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
**/
export class DbInstanceRoles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  featureName?: string;

  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: string;
}
