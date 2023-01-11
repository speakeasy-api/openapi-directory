import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamRequestInput
/** 
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export class TeamRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=html_description" })
  htmlDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;
}
