import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterRoles
/** 
 * Describes an Identity and Access Management (IAM) role that is associated with a cluster.
**/
export class DbClusterRoles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  status?: string;
}
