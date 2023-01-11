import { SpeakeasyBase } from "../../../internal/utils";
export declare class EndpointSendConfiguration extends SpeakeasyBase {
    bodyOverride?: string;
    context?: Record<string, string>;
    rawContent?: string;
    substitutions?: Record<string, string[]>;
    titleOverride?: string;
}
