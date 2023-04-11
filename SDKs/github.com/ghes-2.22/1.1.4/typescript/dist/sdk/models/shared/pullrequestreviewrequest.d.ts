import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { Team } from "./team";
/**
 * Pull Request Review Request
 */
export declare class PullRequestReviewRequest extends SpeakeasyBase {
    teams: Team[];
    users: SimpleUser[];
}
