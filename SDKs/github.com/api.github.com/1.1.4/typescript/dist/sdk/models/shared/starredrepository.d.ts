import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
/**
 * Starred Repository
 */
export declare class StarredRepository extends SpeakeasyBase {
    /**
     * A repository on GitHub.
     */
    repo: Repository;
    starredAt: Date;
}
