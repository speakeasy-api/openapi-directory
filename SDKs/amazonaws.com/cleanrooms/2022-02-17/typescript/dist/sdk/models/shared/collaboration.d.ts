import { SpeakeasyBase } from "../../../internal/utils";
import { CollaborationQueryLogStatusEnum } from "./collaborationquerylogstatusenum";
import { DataEncryptionMetadata } from "./dataencryptionmetadata";
import { MemberStatusEnum } from "./memberstatusenum";
/**
 * The multi-party data share environment. The collaboration contains metadata about its purpose and participants.
 */
export declare class Collaboration extends SpeakeasyBase {
    arn: string;
    createTime: Date;
    creatorAccountId: string;
    creatorDisplayName: string;
    dataEncryptionMetadata?: DataEncryptionMetadata;
    description?: string;
    id: string;
    memberStatus: MemberStatusEnum;
    membershipArn?: string;
    membershipId?: string;
    name: string;
    queryLogStatus: CollaborationQueryLogStatusEnum;
    updateTime: Date;
}
