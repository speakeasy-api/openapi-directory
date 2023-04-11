import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionsBoundary } from "./permissionsboundary";
export declare class PutPermissionsBoundaryToPermissionSetRequest extends SpeakeasyBase {
    instanceArn: string;
    permissionSetArn: string;
    permissionsBoundary: PermissionsBoundary;
}
