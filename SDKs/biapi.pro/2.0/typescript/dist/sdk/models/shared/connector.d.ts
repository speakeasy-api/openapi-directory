import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful GET on Connector resource
 */
export declare class Connector extends SpeakeasyBase {
    /**
     * Authentication mechanism to use
     */
    authMechanism?: string;
    /**
     * If true, this connector is perhaps unstable :)
     */
    beta: boolean;
    /**
     * Usage of this connector is charged
     */
    charged: boolean;
    /**
     * Bank code
     */
    code?: string;
    /**
     * Main color of the bank or provider
     */
    color?: string;
    /**
     * This connector is hidden from your users
     */
    hidden?: boolean;
    /**
     * ID of the connector
     */
    id: number;
    /**
     * How many months of history to fetch
     */
    monthsToFetch?: number;
    /**
     * Name of the bank or provider
     */
    name: string;
    /**
     * If true, new connections cannot be added with this connector
     */
    restricted: boolean;
    /**
     * SIRET code for Bill modules
     */
    siret?: string;
    slug?: string;
    /**
     * How many days to wait between syncs
     */
    syncFrequency?: number;
    /**
     * Unique connector identifier
     */
    uuid: string;
}
