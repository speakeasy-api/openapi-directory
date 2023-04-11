import { SpeakeasyBase } from "../../../internal/utils";
import { GroupMembers } from "./groupmembers";
export declare class PutPrincipalMappingRequest extends SpeakeasyBase {
    dataSourceId?: string;
    groupId: string;
    groupMembers: GroupMembers;
    indexId: string;
    orderingId?: number;
    roleArn?: string;
}
