import { SpeakeasyBase } from "../../../internal/utils";
import { ObservabilityConfigurationStatusEnum } from "./observabilityconfigurationstatusenum";
import { TraceConfiguration } from "./traceconfiguration";
/**
 * <p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p> <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't enabled.</p>
 */
export declare class ObservabilityConfiguration extends SpeakeasyBase {
    createdAt?: Date;
    deletedAt?: Date;
    latest?: boolean;
    observabilityConfigurationArn?: string;
    observabilityConfigurationName?: string;
    observabilityConfigurationRevision?: number;
    status?: ObservabilityConfigurationStatusEnum;
    traceConfiguration?: TraceConfiguration;
}
