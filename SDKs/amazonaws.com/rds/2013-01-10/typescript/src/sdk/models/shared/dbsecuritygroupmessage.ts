import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroups } from "./dbsecuritygroups";



export class DbSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroups })
  dbSecurityGroups?: DbSecurityGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
