import { SpeakeasyBase } from "../../../internal/utils";
import { ShareResourceTypeEnum } from "./shareresourcetypeenum";
/**
 * The share invitation.
 */
export declare class ShareInvitation extends SpeakeasyBase {
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
    shareInvitationId?: string;
    shareResourceType?: ShareResourceTypeEnum;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
