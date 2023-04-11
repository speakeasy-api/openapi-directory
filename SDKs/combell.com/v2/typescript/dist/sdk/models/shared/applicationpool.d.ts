import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The application pool for the hosting account.
 */
export declare class ApplicationPool extends SpeakeasyBase {
    /**
     * The installed .NET Core runtimes for the hosting account.
     */
    installedNetCoreRuntimes?: string[];
    /**
     * The active pipeline mode for the hosting account.
     */
    pipelineMode?: string;
    /**
     * The active runtime for the hosting account.
     */
    runtime?: string;
}
