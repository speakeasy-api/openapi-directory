import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIpamAddressHistoryRequest extends SpeakeasyBase {
    cidr: string;
    dryRun?: boolean;
    endTime?: Date;
    ipamScopeId: string;
    maxResults?: number;
    nextToken?: string;
    startTime?: Date;
    vpcId?: string;
}
