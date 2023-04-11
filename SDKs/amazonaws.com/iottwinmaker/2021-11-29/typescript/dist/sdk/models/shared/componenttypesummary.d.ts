import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * An object that contains information about a component type.
 */
export declare class ComponentTypeSummary extends SpeakeasyBase {
    arn: string;
    componentTypeId: string;
    componentTypeName?: string;
    creationDateTime: Date;
    description?: string;
    status?: Status;
    updateDateTime: Date;
}
