import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyVerifiedAccessGroupRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    dryRun?: boolean;
    verifiedAccessGroupId: string;
    verifiedAccessInstanceId?: string;
}
