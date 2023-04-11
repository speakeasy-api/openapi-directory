import { SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataRepositoryFailureDetails } from "./datarepositoryfailuredetails";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";
/**
 * <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p> <p>This data type is not supported for file systems with the <code>Persistent_2</code> deployment type. Instead, use .</p>
 */
export declare class DataRepositoryConfiguration extends SpeakeasyBase {
    autoImportPolicy?: AutoImportPolicyTypeEnum;
    exportPath?: string;
    /**
     * Provides detailed information about the data repository if its <code>Lifecycle</code> is set to <code>MISCONFIGURED</code> or <code>FAILED</code>.
     */
    failureDetails?: DataRepositoryFailureDetails;
    importPath?: string;
    importedFileChunkSize?: number;
    lifecycle?: DataRepositoryLifecycleEnum;
}
