import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { LaunchPermissionModifications } from "./launchpermissionmodifications";
import { OperationTypeEnum } from "./operationtypeenum";
/**
 * Contains the parameters for ModifyImageAttribute.
 */
export declare class ModifyImageAttributeRequest extends SpeakeasyBase {
    attribute?: string;
    description?: AttributeValue;
    dryRun?: boolean;
    imageId: string;
    imdsSupport?: AttributeValue;
    launchPermission?: LaunchPermissionModifications;
    operationType?: OperationTypeEnum;
    organizationArns?: string[];
    organizationalUnitArns?: string[];
    productCodes?: string[];
    userGroups?: string[];
    userIds?: string[];
    value?: string;
}
