import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSubnetGroups } from "./dbsubnetgroups";



export class DbSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSubnetGroups })
  dbSubnetGroups?: DbSubnetGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
