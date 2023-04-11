import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Add subsite request
 */
export declare class AddSubsiteRequest extends SpeakeasyBase {
    /**
     * Subsite domain name (e.g. alias.be or subsite.site.be).
     */
    domainName?: string;
    /**
     * Folder location for the subsite (when empty we use /subsites/site (e.g. /subsites/subsite.site.be)<br />
     *
     * @remarks
     * The path MUST pre-exist on the server. It WILL NOT be created automatically.
     */
    path?: string;
}
