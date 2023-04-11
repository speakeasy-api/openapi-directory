import { SpeakeasyBase } from "../../../internal/utils";
import { FpgaImageAttributeNameEnum } from "./fpgaimageattributenameenum";
import { LoadPermissionModifications } from "./loadpermissionmodifications";
import { OperationTypeEnum } from "./operationtypeenum";
export declare class ModifyFpgaImageAttributeRequest extends SpeakeasyBase {
    attribute?: FpgaImageAttributeNameEnum;
    description?: string;
    dryRun?: boolean;
    fpgaImageId: string;
    loadPermission?: LoadPermissionModifications;
    name?: string;
    operationType?: OperationTypeEnum;
    productCodes?: string[];
    userGroups?: string[];
    userIds?: string[];
}
