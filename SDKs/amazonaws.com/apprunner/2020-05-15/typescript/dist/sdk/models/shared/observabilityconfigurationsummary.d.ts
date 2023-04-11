import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides summary information about an App Runner observability configuration resource.</p> <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a> actions using the <a>ObservabilityConfiguration</a> type.</p>
 */
export declare class ObservabilityConfigurationSummary extends SpeakeasyBase {
    observabilityConfigurationArn?: string;
    observabilityConfigurationName?: string;
    observabilityConfigurationRevision?: number;
}
