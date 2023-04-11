import { SpeakeasyBase } from "../../../internal/utils";
import { MXRecords } from "./mxrecords";
export declare class Domains extends SpeakeasyBase {
    a?: string[];
    cname?: string[];
    mx?: MXRecords[];
    ns?: string[];
    txt?: string[];
    /**
     * Hosting Country
     */
    country?: string;
    /**
     * Domain creation date
     */
    createDate?: Date;
    /**
     * Domain name
     */
    domain?: string;
    /**
     * If Domain is Dead
     */
    isDead?: string;
    /**
     * Domain last update date
     */
    updateDate?: Date;
}
