import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful GET on ConnectorSource resource
 */
export declare class ConnectorSource extends SpeakeasyBase {
    /**
     * Authentication mechanism to use
     */
    authMechanism?: string;
    /**
     * This source is not used to synchronize the connection
     */
    disabled?: Date;
    /**
     * Comma separated list of capabilities disabled on this connector source
     */
    disabledCapabilities?: string;
    /**
     * Name of the source this fallback is for
     */
    fallback?: string;
    /**
     * ID of the connector source
     */
    id: number;
    /**
     * ID of the connector
     */
    idConnector: number;
    idWeboob: string;
    /**
     * Name of the source
     */
    name: string;
    /**
     * The source priority order for the synchronization
     */
    priority?: number;
    /**
     * last known stability
     */
    stability?: string;
}
