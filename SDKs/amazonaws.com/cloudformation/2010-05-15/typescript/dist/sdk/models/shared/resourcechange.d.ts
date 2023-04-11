import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeActionEnum } from "./changeactionenum";
import { ModuleInfo } from "./moduleinfo";
import { ReplacementEnum } from "./replacementenum";
import { ResourceAttributeEnum } from "./resourceattributeenum";
import { ResourceChangeDetail } from "./resourcechangedetail";
/**
 * The <code>ResourceChange</code> structure describes the resource and the action that CloudFormation will perform on it if you execute this change set.
 */
export declare class ResourceChange extends SpeakeasyBase {
    action?: ChangeActionEnum;
    changeSetId?: string;
    details?: ResourceChangeDetail[];
    logicalResourceId?: string;
    moduleInfo?: ModuleInfo;
    physicalResourceId?: string;
    replacement?: ReplacementEnum;
    resourceType?: string;
    scope?: ResourceAttributeEnum[];
}
