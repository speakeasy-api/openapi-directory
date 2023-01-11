import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterRoles
/** 
 * Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.
**/
export class DbClusterRoles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  featureName?: string;

  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: string;
}
