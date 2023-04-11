import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectorSourceField extends SpeakeasyBase {
    /**
     * ID of the related connector source
     */
    idConnectorSource: number;
    /**
     * Label to display to user
     */
    label: string;
    /**
     * Name of the config
     */
    name: string;
    /**
     * If set, the value must match this regexp
     */
    regex?: string;
    /**
     * If true, config has to be set to use this source
     */
    required?: boolean;
    /**
     * If true, value must be hidden on fronts
     */
    secret?: boolean;
    /**
     * Type of config
     */
    type?: string;
}
