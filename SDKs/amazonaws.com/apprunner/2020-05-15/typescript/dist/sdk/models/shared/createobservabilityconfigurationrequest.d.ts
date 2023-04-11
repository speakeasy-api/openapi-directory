import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TraceConfiguration } from "./traceconfiguration";
export declare class CreateObservabilityConfigurationRequest extends SpeakeasyBase {
    observabilityConfigurationName: string;
    tags?: Tag[];
    traceConfiguration?: TraceConfiguration;
}
