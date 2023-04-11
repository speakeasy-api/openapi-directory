import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The CPU options for the instance. Both the core count and threads per core must be specified in the request.
 */
export declare class LaunchTemplateCpuOptionsRequest extends SpeakeasyBase {
    coreCount?: number;
    threadsPerCore?: number;
}
