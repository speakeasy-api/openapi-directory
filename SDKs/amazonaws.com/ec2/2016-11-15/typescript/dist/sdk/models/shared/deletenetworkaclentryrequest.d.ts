import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkAclEntryRequest extends SpeakeasyBase {
    dryRun?: boolean;
    egress: boolean;
    networkAclId: string;
    ruleNumber: number;
}
