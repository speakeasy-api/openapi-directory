import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Software version information
 */
export declare class SoftwareVersionData extends SpeakeasyBase {
    /**
     * Build date
     */
    buildDate: Date;
    /**
     * &#128640; Since v4.24.0
     *
     * @remarks
     *
     * Determines if the DRACOON Core is deployed in the cloud environment
     */
    isDracoonCloud?: boolean;
    /**
     * REST API version
     */
    restApiVersion: string;
    /**
     * Revision number
     */
    scmRevisionNumber: string;
    /**
     * DRACOON server version
     */
    sdsServerVersion: string;
}
