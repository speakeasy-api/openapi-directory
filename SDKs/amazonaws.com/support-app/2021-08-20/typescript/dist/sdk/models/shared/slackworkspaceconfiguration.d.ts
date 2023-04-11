import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for a Slack workspace that you added to an Amazon Web Services account.
 */
export declare class SlackWorkspaceConfiguration extends SpeakeasyBase {
    allowOrganizationMemberAccount?: boolean;
    teamId: string;
    teamName?: string;
}
