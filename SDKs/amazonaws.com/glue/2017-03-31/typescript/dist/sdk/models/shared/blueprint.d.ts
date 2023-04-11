import { SpeakeasyBase } from "../../../internal/utils";
import { BlueprintStatusEnum } from "./blueprintstatusenum";
import { LastActiveDefinition } from "./lastactivedefinition";
/**
 * The details of a blueprint.
 */
export declare class Blueprint extends SpeakeasyBase {
    blueprintLocation?: string;
    blueprintServiceLocation?: string;
    createdOn?: Date;
    description?: string;
    errorMessage?: string;
    lastActiveDefinition?: LastActiveDefinition;
    lastModifiedOn?: Date;
    name?: string;
    parameterSpec?: string;
    status?: BlueprintStatusEnum;
}
