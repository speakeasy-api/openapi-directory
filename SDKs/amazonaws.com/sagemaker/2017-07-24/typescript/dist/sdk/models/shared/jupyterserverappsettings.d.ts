import { SpeakeasyBase } from "../../../internal/utils";
import { CodeRepository } from "./coderepository";
import { ResourceSpec } from "./resourcespec";
/**
 * The JupyterServer app settings.
 */
export declare class JupyterServerAppSettings extends SpeakeasyBase {
    codeRepositories?: CodeRepository[];
    defaultResourceSpec?: ResourceSpec;
    lifecycleConfigArns?: string[];
}
