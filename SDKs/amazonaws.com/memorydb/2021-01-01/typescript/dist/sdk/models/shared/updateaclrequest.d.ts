import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateACLRequest extends SpeakeasyBase {
    aclName: string;
    userNamesToAdd?: string[];
    userNamesToRemove?: string[];
}
