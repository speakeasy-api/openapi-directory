import { SpeakeasyBase } from "../../../internal/utils";
import { ShareInvitationSummary } from "./shareinvitationsummary";
/**
 * Input for List Share Invitations
 */
export declare class ListShareInvitationsOutput extends SpeakeasyBase {
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    shareInvitationSummaries?: ShareInvitationSummary[];
}
