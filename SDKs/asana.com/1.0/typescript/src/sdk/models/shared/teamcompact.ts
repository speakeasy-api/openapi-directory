import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamCompact
/** 
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export class TeamCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
