import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class SelectedActions extends SpeakeasyBase {
    /**
     * Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
     */
    githubOwnedAllowed?: boolean;
    /**
     * Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.
     */
    patternsAllowed?: string[];
    /**
     * Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.
     */
    verifiedAllowed?: boolean;
}
