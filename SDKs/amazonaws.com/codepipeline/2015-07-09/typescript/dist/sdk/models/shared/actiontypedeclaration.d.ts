import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeArtifactDetails } from "./actiontypeartifactdetails";
import { ActionTypeExecutor } from "./actiontypeexecutor";
import { ActionTypeIdentifier } from "./actiontypeidentifier";
import { ActionTypePermissions } from "./actiontypepermissions";
import { ActionTypeUrls } from "./actiontypeurls";
/**
 * The parameters for the action type definition that are provided when the action type is created or updated.
 */
export declare class ActionTypeDeclaration extends SpeakeasyBase {
    description?: string;
    executor: ActionTypeExecutor;
    id: ActionTypeIdentifier;
    inputArtifactDetails: ActionTypeArtifactDetails;
    outputArtifactDetails: ActionTypeArtifactDetails;
    permissions?: ActionTypePermissions;
    /**
     * The properties of the action type to be updated.
     */
    properties?: any;
    urls?: ActionTypeUrls;
}
