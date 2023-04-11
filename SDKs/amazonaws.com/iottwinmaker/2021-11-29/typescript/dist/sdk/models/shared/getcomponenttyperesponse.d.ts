import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionResponse } from "./functionresponse";
import { PropertyDefinitionResponse } from "./propertydefinitionresponse";
import { PropertyGroupResponse } from "./propertygroupresponse";
import { Status } from "./status";
/**
 * Success
 */
export declare class GetComponentTypeResponse extends SpeakeasyBase {
    arn: string;
    componentTypeId: string;
    componentTypeName?: string;
    creationDateTime: Date;
    description?: string;
    extendsFrom?: string[];
    functions?: Record<string, FunctionResponse>;
    isAbstract?: boolean;
    isSchemaInitialized?: boolean;
    isSingleton?: boolean;
    propertyDefinitions?: Record<string, PropertyDefinitionResponse>;
    propertyGroups?: Record<string, PropertyGroupResponse>;
    status?: Status;
    syncSource?: string;
    updateDateTime: Date;
    workspaceId: string;
}
