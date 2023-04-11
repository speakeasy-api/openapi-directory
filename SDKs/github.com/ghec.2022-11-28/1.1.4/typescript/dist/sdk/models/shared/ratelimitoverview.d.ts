import { SpeakeasyBase } from "../../../internal/utils";
import { RateLimit } from "./ratelimit";
export declare class RateLimitOverviewResources extends SpeakeasyBase {
    actionsRunnerRegistration?: RateLimit;
    codeScanningUpload?: RateLimit;
    core: RateLimit;
    dependencySnapshots?: RateLimit;
    graphql?: RateLimit;
    integrationManifest?: RateLimit;
    scim?: RateLimit;
    search: RateLimit;
    sourceImport?: RateLimit;
}
/**
 * Rate Limit Overview
 */
export declare class RateLimitOverview extends SpeakeasyBase {
    rate: RateLimit;
    resources: RateLimitOverviewResources;
}
