import { SpeakeasyBase } from "../../../internal/utils";
import { MemberStatusEnum } from "./memberstatusenum";
/**
 * The metadata of the collaboration.
 */
export declare class CollaborationSummary extends SpeakeasyBase {
    arn: string;
    createTime: Date;
    creatorAccountId: string;
    creatorDisplayName: string;
    id: string;
    memberStatus: MemberStatusEnum;
    membershipArn?: string;
    membershipId?: string;
    name: string;
    updateTime: Date;
}
