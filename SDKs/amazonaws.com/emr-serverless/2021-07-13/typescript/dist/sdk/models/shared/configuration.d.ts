import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration specification to be used when provisioning an application. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
 */
export declare class Configuration extends SpeakeasyBase {
    classification: string;
    configurations?: Configuration[];
    /**
     * A set of properties specified within a configuration classification.
     */
    properties?: any;
}
