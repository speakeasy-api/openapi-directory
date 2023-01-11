import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoalCompactOwner
/** 
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export class GoalCompactOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// GoalCompact
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class GoalCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: GoalCompactOwner;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
