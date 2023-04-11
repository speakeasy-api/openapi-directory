import { SpeakeasyBase } from "../../../internal/utils";
export declare class Opi extends SpeakeasyBase {
    /**
     * Indicates if Pay at table is enabled.
     */
    enablePayAtTable?: boolean;
    /**
     * The store number to use for Pay at Table.
     */
    payAtTableStoreNumber?: string;
    /**
     * The URL and port number used for Pay at Table communication.
     */
    payAtTableURL?: string;
}
