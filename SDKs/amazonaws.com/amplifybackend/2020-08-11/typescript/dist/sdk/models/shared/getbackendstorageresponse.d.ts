import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticatedElementEnum } from "./authenticatedelementenum";
import { UnAuthenticatedElementEnum } from "./unauthenticatedelementenum";
/**
 * The authorization configuration for the storage S3 bucket.
 */
export declare class GetBackendStorageResponseResourceConfigPermissions extends SpeakeasyBase {
    authenticated: AuthenticatedElementEnum[];
    unAuthenticated?: UnAuthenticatedElementEnum[];
}
/**
 * The name of the storage service.
 */
export declare enum GetBackendStorageResponseResourceConfigServiceNameEnum {
    S3 = "S3"
}
/**
 * The resource configuration for the backend storage resource.
 */
export declare class GetBackendStorageResponseResourceConfig extends SpeakeasyBase {
    bucketName?: string;
    imported: boolean;
    permissions?: GetBackendStorageResponseResourceConfigPermissions;
    serviceName: GetBackendStorageResponseResourceConfigServiceNameEnum;
}
/**
 * Success
 */
export declare class GetBackendStorageResponse extends SpeakeasyBase {
    appId?: string;
    backendEnvironmentName?: string;
    resourceConfig?: GetBackendStorageResponseResourceConfig;
    resourceName?: string;
}
