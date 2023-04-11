import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeNameEnum } from "./runtimenameenum";
/**
 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
 */
export declare class AppSyncRuntime extends SpeakeasyBase {
    name: RuntimeNameEnum;
    runtimeVersion: string;
}
