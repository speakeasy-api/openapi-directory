import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a single SFTP connection in all of it variations
 */
export declare class SFTPTransport extends SpeakeasyBase {
    /**
     * The file path to place the report
     */
    filePath: string;
    /**
     * Host name and domain
     */
    host: string;
    /**
     * The port to use
     */
    port: number;
    /**
     * The discriminator
     */
    type: string;
}
