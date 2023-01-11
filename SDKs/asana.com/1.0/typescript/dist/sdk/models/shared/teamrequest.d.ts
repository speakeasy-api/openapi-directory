import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export declare class TeamRequestInput extends SpeakeasyBase {
    description?: string;
    htmlDescription?: string;
    name?: string;
    organization?: string;
}
